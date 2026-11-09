# Verity — Digital Identity Verification

Mobile-first static website concept about secure, privacy-first digital identity verification.

## Preview on a phone

Open the published site URL in your phone browser. The layout adapts to small screens and includes a mobile navigation menu. The sample-check button is simulated: it does not use the camera or collect or transmit biometric information.

## Publish on Render

1. Sign in to Render and choose **New → Static Site**.
2. Connect your GitHub account, then select `arafathbepari/digital-identity-verification-system`.
3. Set **Build Command** to blank (or `echo static site`) and **Publish Directory** to `.`.
4. Click **Create Static Site**. Render will build and give you a URL ending in `onrender.com`; open that link on your phone.

The included `render.yaml` can prefill the static-site settings if you choose Render's Blueprint flow. If Render does not show the repository, authorize Render to access it in its GitHub settings.

## Important

This is an informational front-end concept, not a real identity verification service. No biometric data is collected. Replace the placeholder contact address `hello@verity.example` before using the site. Real biometric verification needs a reviewed backend, privacy/legal review, threat modeling, and independent testing.
