// Vercel serverless function: receives a sample-sequence request and emails it
// to the owner via Resend. No SDK — uses the Resend REST API over fetch.
//
// Env vars (set in Vercel project settings):
//   RESEND_API_KEY    (required) — Resend API key
//   LEAD_NOTIFY_EMAIL (optional) — where leads are sent. Default below.
//   LEAD_FROM_EMAIL   (optional) — verified Resend sender. Defaults to the
//                                  Resend test sender, which only delivers to
//                                  the Resend account owner's address (fine for
//                                  now; switch to noreply@dealtexts.com once the
//                                  domain is verified in Resend).

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { phone, vertical } = req.body || {};
  if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
    return res.status(400).json({ success: false, error: "A valid phone number is required." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL || "10stepstester@gmail.com";
  const from = process.env.LEAD_FROM_EMAIL || "DealTexts <onboarding@resend.dev>";

  if (!apiKey) {
    // Don't lose the lead silently — it still shows up in the function logs.
    console.error("RESEND_API_KEY not set. Lead received but not emailed:", phone);
    return res.status(500).json({ success: false, error: "Email is not configured yet." });
  }

  const when = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `New DealTexts lead: ${phone.trim()}`,
        text:
          `New sample-sequence request from dealtexts.com\n\n` +
          `Phone:    ${phone.trim()}\n` +
          `Vertical: ${vertical || "—"}\n` +
          `Time:     ${when} (Central)\n`,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      console.error("Resend send failed", r.status, detail);
      return res.status(502).json({ success: false, error: "Could not send right now." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("lead handler error", err);
    return res.status(500).json({ success: false, error: "Server error." });
  }
}
