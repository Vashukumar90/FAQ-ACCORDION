/* =============================================================
   FAQ ACCORDION — Production JavaScript
   Modular • Accessible • Debounced Search • localStorage
   ============================================================= */

// ============================================================
// 1. FAQ DATA — 105 Real-World Questions
// ============================================================
const FAQ_DATA = [
  // ===================== GENERAL (22) =====================
  {
    id: 1,
    category: "General",
    mostAsked: true,
    question: "What is this platform and how does it work?",
    answer: "Our platform is an all-in-one solution for managing your projects, tasks, and team collaboration. Simply sign up, create a workspace, invite your team members, and start organizing your work. We offer Kanban boards, timelines, calendars, and real-time collaboration tools to keep everyone on the same page."
  },
  {
    id: 2,
    category: "General",
    mostAsked: true,
    question: "Is there a free plan available?",
    answer: "Yes! We offer a generous free plan that includes up to 5 team members, 3 projects, and 500 MB of storage. It's perfect for individuals and small teams getting started. You can upgrade anytime to unlock unlimited projects, advanced features, and priority support."
  },
  {
    id: 3,
    category: "General",
    mostAsked: true,
    question: "How do I create an account?",
    answer: "Click the 'Get Started' button on our homepage. You can sign up using your email address, Google account, or Apple ID. Fill in your name, choose a strong password, verify your email through the link we send you, and you're all set. The entire process takes less than 2 minutes."
  },
  {
    id: 4,
    category: "General",
    mostAsked: false,
    question: "Can I use this on mobile devices?",
    answer: "Absolutely. We have dedicated apps for both iOS and Android, available on the App Store and Google Play. The mobile apps sync seamlessly with the web version, so you can manage your work from anywhere. All features are available on mobile, including notifications, file uploads, and team chat."
  },
  {
    id: 5,
    category: "General",
    mostAsked: false,
    question: "How do I invite team members to my workspace?",
    answer: "Go to your Workspace Settings → Members → Click 'Invite People'. Enter their email addresses (you can invite multiple at once), set their role (Admin, Member, or Viewer), and optionally add a personal message. They'll receive an email invitation with a link to join. Invited members don't need to create an account separately — they can join through the email link."
  },
  {
    id: 6,
    category: "General",
    mostAsked: false,
    question: "What languages does the platform support?",
    answer: "We currently support English, Spanish, French, German, Portuguese, Japanese, Korean, and Hindi. You can change your language preference in Settings → Preferences → Language. The platform will automatically switch and all UI elements, notifications, and emails will be displayed in your chosen language."
  },
  {
    id: 7,
    category: "General",
    mostAsked: false,
    question: "Can I customize my workspace theme?",
    answer: "Yes! Go to Settings → Appearance to choose from light mode, dark mode, or let it follow your system preference. You can also set a custom workspace icon, change the accent color, and organize your sidebar to prioritize the tools you use most."
  },
  {
    id: 8,
    category: "General",
    mostAsked: false,
    question: "How do I contact customer support?",
    answer: "You can reach our support team in three ways: (1) Click the chat bubble in the bottom-right corner of the app for live chat (available 9 AM – 9 PM EST). (2) Email us at support@helpcenter.com — we respond within 4 hours. (3) Visit our Community Forum to browse solutions or ask other users. Premium and Enterprise users get priority support with a dedicated account manager."
  },
  {
    id: 9,
    category: "General",
    mostAsked: false,
    question: "Do you offer a trial for paid plans?",
    answer: "Yes, we offer a 14-day free trial on all paid plans — no credit card required. During the trial, you get full access to every feature. At the end of the trial, you can choose to subscribe or continue with the free plan. We'll send you a reminder email 3 days before the trial ends."
  },
  {
    id: 10,
    category: "General",
    mostAsked: false,
    question: "Can I export my data from the platform?",
    answer: "Yes. Go to Settings → Data → Export. You can export all your data as CSV, JSON, or PDF files. This includes projects, tasks, comments, files, and team member lists. Exports are processed in the background and you'll receive an email with download links when ready. Data export is available on all plans."
  },
  {
    id: 11,
    category: "General",
    mostAsked: false,
    question: "What is the difference between Admin, Member, and Viewer roles?",
    answer: "<strong>Admin:</strong> Full access — can manage billing, invite/remove members, change workspace settings, and access all projects.<br><strong>Member:</strong> Can create and edit projects, assign tasks, comment, and upload files. Cannot manage billing or workspace settings.<br><strong>Viewer:</strong> Read-only access — can view projects and tasks but cannot make changes. Ideal for stakeholders and clients."
  },
  {
    id: 12,
    category: "General",
    mostAsked: false,
    question: "Is there an API available for developers?",
    answer: "Yes, we offer a comprehensive REST API and GraphQL API. You can generate API keys from Settings → Developer → API Keys. Our API documentation includes code examples in Python, JavaScript, PHP, and Ruby. Rate limits are 1,000 requests/hour on Pro and 10,000 on Enterprise. We also offer webhooks for real-time event notifications."
  },
  {
    id: 13,
    category: "General",
    mostAsked: false,
    question: "How often do you release new features?",
    answer: "We release updates every 2 weeks on Tuesdays. Major feature updates are announced in advance via email and our changelog page. Bug fixes and security patches are deployed as needed. You can follow our development progress on our public roadmap at roadmap.helpcenter.com where you can also vote on upcoming features."
  },
  {
    id: 14,
    category: "General",
    mostAsked: false,
    question: "Can I integrate with tools I already use?",
    answer: "We integrate with 200+ tools including Slack, Microsoft Teams, Google Workspace, GitHub, GitLab, Jira, Figma, Zapier, and many more. Go to Settings → Integrations to browse and connect your tools. Most integrations take under 2 minutes to set up. If you don't see a tool you use, check our Zapier integration which connects to 5,000+ apps."
  },
  {
    id: 15,
    category: "General",
    mostAsked: false,
    question: "What happens to my data if I cancel my subscription?",
    answer: "If you cancel, your account switches to the free plan immediately. Your data is never deleted — you retain access to 3 projects and all your files. If you want to permanently delete your data, you can request full deletion from Settings → Privacy → Delete Account. Data deletion takes 30 days to complete and is irreversible."
  },
  {
    id: 16,
    category: "General",
    mostAsked: false,
    question: "Do you offer discounts for nonprofits or education?",
    answer: "Yes! We offer a 50% discount for verified nonprofits and educational institutions. Students and teachers get an additional 20% off on top of that. To apply, go to our Discount Page and submit your organization's verification documents. Approval typically takes 2–3 business days."
  },
  {
    id: 17,
    category: "General",
    mostAsked: false,
    question: "Can I have multiple workspaces?",
    answer: "Yes. You can create and switch between multiple workspaces from the sidebar. Each workspace has its own projects, members, and settings. Free accounts can have up to 2 workspaces. Pro users can have up to 10, and Enterprise users have unlimited workspaces. You can easily move projects between workspaces using the 'Move' option in project settings."
  },
  {
    id: 18,
    category: "General",
    mostAsked: false,
    question: "How do I set up notifications?",
    answer: "Go to Settings → Notifications. You can customize notifications for: task assignments, due date reminders, comments, mentions, project updates, and team messages. Choose to receive them via email, push notifications, in-app notifications, or Slack. You can also set quiet hours (e.g., 10 PM – 7 AM) to avoid notifications during off-hours."
  },
  {
    id: 19,
    category: "General",
    mostAsked: false,
    question: "Is there a desktop app?",
    answer: "Yes, we offer native desktop apps for Windows, macOS, and Linux. Download them from our website or the Microsoft Store / Mac App Store. The desktop apps offer additional features like offline mode, system-wide keyboard shortcuts, native file drag-and-drop, and desktop notifications even when the app is closed."
  },
  {
    id: 20,
    category: "General",
    mostAsked: false,
    question: "Can I set up recurring tasks?",
    answer: "Yes. When creating or editing a task, click the 'Repeat' option. You can set tasks to repeat daily, weekly, monthly, yearly, or with a custom pattern (e.g., every 3rd Monday). You can also set an end date or a maximum number of repetitions. Recurring tasks are available on all paid plans."
  },
  {
    id: 21,
    category: "General",
    mostAsked: false,
    question: "How do I track time spent on tasks?",
    answer: "Open any task and click the 'Timer' icon to start tracking time. You can also manually log time by clicking 'Log Time' and entering hours and minutes. Time logs include start/end times, descriptions, and can be exported as reports. Time tracking is available on Pro and Enterprise plans."
  },
  {
    id: 22,
    category: "General",
    mostAsked: false,
    question: "Can I create custom templates?",
    answer: "Yes. Go to any project, click the three-dot menu, and select 'Save as Template.' You can name your template, add a description, and choose which elements to include (task structure, labels, checklists, due dates). Templates can be shared with your team or kept private. Enterprise users can set organization-wide templates."
  },

  // ===================== ACCOUNT & LOGIN (21) =====================
  {
    id: 23,
    category: "Account & Login",
    mostAsked: true,
    question: "How do I reset my password if I forgot it?",
    answer: "Click 'Forgot Password' on the login page. Enter your registered email address and we'll send you a secure reset link within 1–2 minutes. The link expires after 24 hours. Click the link, enter your new password (minimum 8 characters with at least one number and one special character), and confirm. You'll be automatically logged in with your new password."
  },
  {
    id: 24,
    category: "Account & Login",
    mostAsked: true,
    question: "Why am I unable to log in to my account?",
    answer: "There are several common reasons: (1) <strong>Wrong credentials</strong> — double-check your email and password. (2) <strong>Account not verified</strong> — check your inbox (and spam folder) for the verification email. (3) <strong>Too many failed attempts</strong> — your account is temporarily locked for 15 minutes after 5 failed attempts. (4) <strong>Browser cookies</strong> — try clearing your browser cache and cookies. If none of these work, contact support."
  },
  {
    id: 25,
    category: "Account & Login",
    mostAsked: true,
    question: "How do I enable two-factor authentication (2FA)?",
    answer: "Go to Settings → Security → Two-Factor Authentication. Click 'Enable 2FA' and choose your method: <strong>Authenticator App</strong> (recommended — use Google Authenticator, Authy, or 1Password), <strong>SMS</strong> (receive codes via text), or <strong>Email</strong>. Scan the QR code with your authenticator app, enter the 6-digit code to verify, and save your backup codes in a safe place. 2FA adds a critical extra layer of security."
  },
  {
    id: 26,
    category: "Account & Login",
    mostAsked: false,
    question: "How do I delete my account permanently?",
    answer: "Go to Settings → Privacy → Delete Account. You'll be asked to enter your password and confirm the deletion. Please note: <strong>This action is irreversible.</strong> All your data, projects, and files will be permanently deleted within 30 days. If you're an admin of a workspace, you must transfer ownership or delete the workspace first. If you change your mind within 30 days, contact support immediately."
  },
  {
    id: 27,
    category: "Account & Login",
    mostAsked: false,
    question: "Can I change my email address?",
    answer: "Yes. Go to Settings → Account → Email. Enter your new email address and your current password for verification. We'll send a confirmation link to your new email. Click the link to verify. Once verified, your old email is replaced and all future communications go to the new address. You can only change your email once every 30 days."
  },
  {
    id: 28,
    category: "Account & Login",
    mostAsked: false,
    question: "I didn't receive the verification email. What should I do?",
    answer: "First, check your spam/junk folder and any email filters. If it's not there: (1) Make sure you entered the correct email address. (2) Wait up to 10 minutes — some email providers delay delivery. (3) Click 'Resend Verification Email' on the login page. (4) Add noreply@helpcenter.com to your email's safe senders list. If you still don't receive it after 30 minutes, contact support."
  },
  {
    id: 29,
    category: "Account & Login",
    mostAsked: false,
    question: "How do I change my display name or profile picture?",
    answer: "Click your avatar in the top-right corner → Profile Settings. Click on your current name or photo to edit them. Profile pictures should be square images (minimum 200×200px) in JPG or PNG format. Changes are saved automatically and appear across all workspaces within 1–2 minutes."
  },
  {
    id: 30,
    category: "Account & Login",
    mostAsked: false,
    question: "Can I have two accounts with the same email?",
    answer: "No. Each email address can only be associated with one account. If you need separate accounts (e.g., one for work and one for personal use), you'll need to use different email addresses. You can link multiple accounts in Settings → Accounts for easy switching between them."
  },
  {
    id: 31,
    category: "Account & Login",
    mostAsked: false,
    question: "How do I manage active sessions on my account?",
    answer: "Go to Settings → Security → Active Sessions. Here you'll see a list of all devices and browsers currently logged into your account, along with their last active time and location. You can click 'Revoke' next to any session to log it out remotely. This is especially useful if you've lost a device or suspect unauthorized access."
  },
  {
    id: 32,
    category: "Account & Login",
    mostAsked: false,
    question: "I'm getting a 'Session Expired' message. Why?",
    answer: "Sessions expire automatically after 30 days of inactivity for security reasons. If you're seeing this frequently, it could be due to: (1) Your browser clearing cookies on close — adjust browser settings to keep cookies. (2) Using incognito/private mode — sessions don't persist in these modes. (3) Conflicting browser extensions — try disabling privacy extensions for our site. (4) Multiple devices logging in — the oldest session gets logged out on the free plan."
  },
  {
    id: 33,
    category: "Account & Login",
    mostAsked: false,
    question: "How do I sign in with Google or Apple?",
    answer: "On the login page, click 'Continue with Google' or 'Continue with Apple.' You'll be redirected to the respective service to authenticate. After approving, you'll be logged in automatically. Note: If you originally signed up with email, you can link your Google/Apple account in Settings → Connected Accounts for future quick logins."
  },
  {
    id: 34,
    category: "Account & Login",
    mostAsked: false,
    question: "Can I merge two separate accounts?",
    answer: "Currently, automatic account merging isn't available. However, our support team can manually merge accounts if you contact them with both email addresses. The process preserves data from both accounts and takes 1–2 business days. After merging, you'll log in with the primary email and all your data will be consolidated."
  },
  {
    id: 35,
    category: "Account & Login",
    mostAsked: false,
    question: "What happens if I lose access to my 2FA device?",
    answer: "When you set up 2FA, we provided you with 10 backup codes. Use any of these codes to log in. If you've lost your backup codes too, contact support with proof of identity (a photo of your government ID or verification of recent account activity). We'll help you regain access within 24 hours. For this reason, we strongly recommend storing backup codes in a password manager."
  },
  {
    id: 36,
    category: "Account & Login",
    mostAsked: false,
    question: "How do I set up SSO (Single Sign-On) for my team?",
    answer: "SSO is available on the Enterprise plan. Go to Settings → Security → SSO. We support SAML 2.0 and OpenID Connect with providers like Okta, Azure AD, OneLogin, and Google Workspace. You'll need your Identity Provider's metadata URL or XML file. Our setup wizard walks you through the process. Enterprise customers also get dedicated support for SSO configuration."
  },
  {
    id: 37,
    category: "Account & Login",
    mostAsked: false,
    question: "Why is my account locked?",
    answer: "Accounts are automatically locked for 15 minutes after 5 consecutive failed login attempts to prevent brute-force attacks. Wait for the lockout period to expire, then try again with the correct credentials. If you've forgotten your password, use the 'Forgot Password' link instead. If your account was locked due to suspicious activity (login from an unusual location), you'll need to verify your identity via email."
  },
  {
    id: 38,
    category: "Account & Login",
    mostAsked: false,
    question: "Can I transfer workspace ownership to someone else?",
    answer: "Yes. Go to Settings → Workspace → Members. Find the person you want to transfer ownership to (they must already be a member), click the three-dot menu next to their name, and select 'Transfer Ownership.' You'll need to enter your password to confirm. The new owner will receive an email notification and gain full admin access immediately."
  },
  {
    id: 39,
    category: "Account & Login",
    mostAsked: false,
    question: "How do I deactivate my account instead of deleting it?",
    answer: "We don't offer a separate deactivation option. However, you can effectively deactivate by: (1) Removing all team members from your workspaces. (2) Archiving all your projects. (3) Logging out and not using the account. Your data remains intact and you can reactivate at any time by simply logging back in. If you want permanent deletion, use the Delete Account option."
  },
  {
    id: 40,
    category: "Account & Login",
    mostAsked: false,
    question: "I'm seeing 'Account Under Review.' What does this mean?",
    answer: "New accounts may be briefly reviewed to prevent spam and abuse. This usually takes less than 1 hour. If your review takes longer, check your email for any requests for additional information. If you believe this is an error, contact support with your registration email and we'll expedite the review."
  },
  {
    id: 41,
    category: "Account & Login",
    mostAsked: false,
    question: "Can I use the same account on multiple devices?",
    answer: "Yes, you can log in on unlimited devices simultaneously. Your data syncs in real-time across all devices. However, on the free plan, only your most recent session remains active — older sessions are logged out when a new one starts. Paid plans support concurrent sessions on all your devices without any limitations."
  },
  {
    id: 42,
    category: "Account & Login",
    mostAsked: false,
    question: "How do I update my billing address?",
    answer: "Go to Settings → Billing → Billing Details. Click 'Edit' next to your billing address, update the information, and save. This address is used for invoices and tax calculations. Changes take effect immediately for future invoices but don't retroactively change past invoices."
  },
  {
    id: 43,
    category: "Account & Login",
    mostAsked: false,
    question: "What should I do if I suspect someone accessed my account?",
    answer: "Take these steps immediately: (1) Change your password from Settings → Security. (2) Enable 2FA if not already active. (3) Review Active Sessions and revoke any unfamiliar ones. (4) Check recent activity in Settings → Security → Activity Log. (5) Contact our security team at security@helpcenter.com. We take unauthorized access very seriously and will help you secure your account."
  },

  // ===================== PAYMENTS & REFUNDS (22) =====================
  {
    id: 44,
    category: "Payments & Refunds",
    mostAsked: true,
    question: "Why is my payment failing and how can I fix it?",
    answer: "Payment failures are usually caused by: (1) <strong>Insufficient funds</strong> — check your bank balance. (2) <strong>Card expired</strong> — update your card details in Settings → Billing. (3) <strong>Bank blocking</strong> — some banks block international transactions. Call your bank to authorize charges from 'HelpCenter Inc.' (4) <strong>Incorrect card info</strong> — double-check the card number, expiry, and CVV. (5) <strong>3D Secure required</strong> — complete the authentication prompt from your bank. If the issue persists, try a different payment method or contact support."
  },
  {
    id: 45,
    category: "Payments & Refunds",
    mostAsked: true,
    question: "How can I get a refund?",
    answer: "We offer a 30-day money-back guarantee on all paid plans. To request a refund: Go to Settings → Billing → Request Refund, select the subscription you want refunded, and provide a brief reason. Refunds are processed within 5–7 business days and credited back to your original payment method. Note: Refunds are only available for subscriptions within the first 30 days of purchase. After 30 days, you can cancel but won't receive a refund."
  },
  {
    id: 46,
    category: "Payments & Refunds",
    mostAsked: true,
    question: "How do I update my payment method?",
    answer: "Go to Settings → Billing → Payment Methods. Click 'Add Payment Method' to add a new card, PayPal, or bank account. Set the new method as default by clicking 'Set as Default.' You can remove old methods by clicking the trash icon. Changes are immediate — your next invoice will use the new default method."
  },
  {
    id: 47,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "What payment methods do you accept?",
    answer: "We accept: <strong>Credit/Debit Cards</strong> (Visa, Mastercard, American Express, Discover), <strong>PayPal</strong>, <strong>Apple Pay</strong>, <strong>Google Pay</strong>, and <strong>Bank Transfers</strong> (ACH for US, SEPA for EU). Enterprise customers can also pay via invoice with NET-30 terms. All payments are processed securely through Stripe, a PCI-DSS Level 1 certified payment processor."
  },
  {
    id: 48,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel anytime from Settings → Billing → Cancel Subscription. Your access continues until the end of your current billing period. For example, if you cancel on the 15th but your billing cycle ends on the 30th, you'll retain full access until the 30th. After cancellation, your account downgrades to the free plan and you won't be charged again."
  },
  {
    id: 49,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "How do I view my invoices and receipts?",
    answer: "Go to Settings → Billing → Invoice History. You'll see a complete list of all invoices with dates, amounts, and payment status. Click any invoice to view or download it as a PDF. Invoices include your billing details, tax information, and a breakdown of charges. You can also set up automatic invoice forwarding to your accounting email."
  },
  {
    id: 50,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "Do you offer annual billing? Is there a discount?",
    answer: "Yes! Annual billing comes with a 20% discount compared to monthly billing. For example, our Pro plan is $19/month billed monthly, but only $15/month when billed annually ($180/year). To switch to annual billing, go to Settings → Billing → Change Plan and select the annual option. The switch takes effect at your next billing cycle."
  },
  {
    id: 51,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "What happens if a payment fails?",
    answer: "If a payment fails, we retry automatically 3 times over 7 days. You'll receive email notifications after each attempt. If all retries fail, your subscription is paused and your account downgrades to the free plan. You won't lose any data. To restore access, simply update your payment method and pay the outstanding balance. We also offer a 7-day grace period before any features are restricted."
  },
  {
    id: 52,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "Can I get a prorated refund when downgrading?",
    answer: "When you downgrade from a paid plan to the free plan mid-cycle, we don't issue prorated refunds. Instead, your paid features remain active until the end of your current billing period. For example, if you downgrade on the 10th and your cycle ends on the 30th, you keep paid features until the 30th. No partial refunds are issued for the remaining days."
  },
  {
    id: 53,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "How do I apply a coupon or promo code?",
    answer: "Go to Settings → Billing → Apply Coupon. Enter your code and click 'Apply.' The discount will be reflected in your next invoice. Coupons can offer percentage discounts (e.g., 20% off), fixed amounts (e.g., $10 off), or free trial extensions. Most coupons are valid for one-time use and cannot be combined with other offers. Check the coupon's expiry date before applying."
  },
  {
    id: 54,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "Are there any hidden fees or charges?",
    answer: "No hidden fees. The price you see is the price you pay. All taxes are calculated and displayed transparently at checkout. There are no setup fees, no per-user fees beyond what's stated, and no charges for storage within your plan limits. The only potential additional cost is overage if you exceed your storage limit — in which case we'll notify you before charging."
  },
  {
    id: 55,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "How do I switch between monthly and annual billing?",
    answer: "Go to Settings → Billing → Change Billing Cycle. Select 'Monthly' or 'Annual' and confirm. If switching from monthly to annual, you'll receive a prorated credit for your remaining monthly period. If switching from annual to monthly, the change takes effect at the end of your current annual period. You won't lose any features during the transition."
  },
  {
    id: 56,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "Can I add multiple payment methods?",
    answer: "Yes. You can add up to 5 payment methods to your account. Set one as the default for automatic billing. If the default method fails, we'll try the next available method in the order you've arranged them. Go to Settings → Billing → Payment Methods to manage your payment methods."
  },
  {
    id: 57,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "What is your refund policy for annual plans?",
    answer: "Annual plans are eligible for a full refund within the first 30 days. After 30 days, refunds are calculated on a prorated basis for the remaining months, minus a 10% administrative fee. For example, if you cancel after 6 months of a 12-month plan, you'll receive a refund for the remaining 6 months minus 10%. Refund requests are processed within 7 business days."
  },
  {
    id: 58,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "Do you charge sales tax or VAT?",
    answer: "Yes, we charge applicable sales tax or VAT based on your location. For US customers, sales tax is applied based on your state. For EU customers, VAT is applied at your country's standard rate. Tax rates are calculated automatically at checkout. Businesses with a valid VAT number can enter it in Settings → Billing to be charged without VAT (reverse charge mechanism)."
  },
  {
    id: 59,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "How do I request a change to my billing cycle date?",
    answer: "Contact our billing team at billing@helpcenter.com with your account email and preferred billing date. We can adjust your billing date once per year. This is useful if you want all your subscriptions to renew on the same date. The adjustment is processed within 2 business days and you'll receive a confirmation email."
  },
  {
    id: 60,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "Can I purchase additional storage separately?",
    answer: "Yes. If you need more storage than your plan includes, you can purchase additional storage blocks of 5 GB each at $2/month per block. Go to Settings → Billing → Add Storage. You can add up to 100 GB of additional storage. Storage blocks are billed monthly and can be removed anytime — charges are prorated for the remaining period."
  },
  {
    id: 61,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "What happens when my free trial ends?",
    answer: "When your 14-day trial ends, you'll be prompted to choose a paid plan. If you don't select one, your account automatically switches to the free plan. Your data is never deleted — projects beyond the free limit are archived (not visible but recoverable). You'll receive email reminders at 7 days, 3 days, and 1 day before your trial expires."
  },
  {
    id: 62,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "How do I verify a charge on my bank statement?",
    answer: "Charges from us appear on your bank statement as 'HELPCENTER.COM' or 'HELP CENTER INC.' If you see a charge you don't recognize, check Settings → Billing → Invoice History to match the amount and date. If you still can't identify the charge, contact us at billing@helpcenter.com with the transaction details and we'll help you verify it."
  },
  {
    id: 63,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "Can I pay with cryptocurrency?",
    answer: "Currently, we do not accept cryptocurrency payments. We're actively exploring crypto payment options and plan to support Bitcoin and Ethereum in the future. If you're interested in being notified when crypto payments become available, sign up for our newsletter at the bottom of our pricing page."
  },
  {
    id: 64,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "I was charged twice. How do I get a refund for the duplicate charge?",
    answer: "Duplicate charges are rare but can happen due to payment processing errors. Contact us at billing@helpcenter.com with your account email, the transaction IDs (from your bank), and the dates of both charges. We'll investigate within 24 hours and immediately refund the duplicate charge. Refunds typically appear in your account within 3–5 business days."
  },
  {
    id: 65,
    category: "Payments & Refunds",
    mostAsked: false,
    question: "Do you offer team or enterprise volume discounts?",
    answer: "Yes. For teams of 20+ members, we offer volume discounts starting at 10% off and scaling up to 35% for 100+ members. Enterprise customers with 500+ members receive custom pricing. Contact our sales team at sales@helpcenter.com to discuss your needs and get a personalized quote."
  },

  // ===================== TECHNICAL ISSUES (21) =====================
  {
    id: 66,
    category: "Technical Issues",
    mostAsked: true,
    question: "Why is the app not loading properly?",
    answer: "Try these steps in order: (1) <strong>Refresh the page</strong> — press Ctrl+F5 (Cmd+Shift+R on Mac) for a hard refresh. (2) <strong>Check your internet</strong> — test your connection at fast.com. (3) <strong>Clear browser cache</strong> — go to browser settings and clear cached files and cookies. (4) <strong>Disable extensions</strong> — ad blockers or privacy extensions can interfere. (5) <strong>Try a different browser</strong> — we support Chrome, Firefox, Safari, and Edge. (6) <strong>Check our status page</strong> — visit status.helpcenter.com to see if we're experiencing outages."
  },
  {
    id: 67,
    category: "Technical Issues",
    mostAsked: true,
    question: "Why am I not receiving notifications?",
    answer: "Check these settings: (1) <strong>Browser notifications</strong> — click the lock icon in your browser's address bar and ensure notifications are allowed. (2) <strong>App settings</strong> — go to Settings → Notifications and ensure the types of notifications you want are enabled. (3) <strong>System settings</strong> — on your computer/phone, make sure notifications aren't blocked for our app. (4) <strong>Do Not Disturb</strong> — check if your device is in DND mode. (5) <strong>Email notifications</strong> — check your spam folder and add noreply@helpcenter.com to your safe senders."
  },
  {
    id: 68,
    category: "Technical Issues",
    mostAsked: false,
    question: "The app is running very slowly. What can I do?",
    answer: "Slow performance can be caused by: (1) <strong>Large workspace</strong> — if you have 10,000+ tasks, try using filters to reduce the visible data. (2) <strong>Browser resources</strong> — close unused tabs and restart your browser. (3) <strong>Outdated browser</strong> — update to the latest version of Chrome, Firefox, or Safari. (4) <strong>Large file uploads</strong> — uploading very large files can temporarily slow the app. (5) <strong>Network issues</strong> — test your internet speed. If the issue persists on multiple devices and browsers, contact support."
  },
  {
    id: 69,
    category: "Technical Issues",
    mostAsked: false,
    question: "I'm getting a 404 error. What does this mean?",
    answer: "A 404 error means the page you're trying to access doesn't exist. This could be because: (1) The link is broken or outdated — try navigating from the homepage instead. (2) You don't have permission — ask the workspace admin to grant you access. (3) The project or task was deleted. (4) You're using a bookmarked URL from a feature we've updated. If you believe this is a bug, take a screenshot and report it to our support team."
  },
  {
    id: 70,
    category: "Technical Issues",
    mostAsked: false,
    question: "Why are my files not uploading?",
    answer: "File upload issues are usually caused by: (1) <strong>File too large</strong> — the max file size is 50 MB on free plans, 200 MB on Pro, and 1 GB on Enterprise. (2) <strong>Unsupported format</strong> — we support PDF, DOC, XLS, PPT, JPG, PNG, GIF, MP4, ZIP, and more. (3) <strong>Unstable connection</strong> — try uploading on a stable Wi-Fi connection. (4) <strong>Browser issue</strong> — try a different browser or the desktop app. If you're uploading many files at once, try uploading them in smaller batches."
  },
  {
    id: 71,
    category: "Technical Issues",
    mostAsked: false,
    question: "How do I clear my browser cache for this site?",
    answer: "<strong>Chrome:</strong> Settings → Privacy and Security → Clear Browsing Data → Select 'Cached images and files' → Clear data.<br><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data → Clear Data.<br><strong>Safari:</strong> Safari menu → Clear History → Select 'all history' → Clear History.<br><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data → Choose what to clear.<br>After clearing, refresh the page and log in again."
  },
  {
    id: 72,
    category: "Technical Issues",
    mostAsked: false,
    question: "Why is the mobile app crashing?",
    answer: "Try these fixes: (1) <strong>Update the app</strong> — check the App Store or Google Play for updates. (2) <strong>Restart your phone</strong> — this clears temporary memory issues. (3) <strong>Reinstall the app</strong> — delete and reinstall to clear corrupted data. (4) <strong>Check storage</strong> — ensure your phone has at least 500 MB of free storage. (5) <strong>Update your OS</strong> — we require iOS 14+ or Android 8+. If crashes persist, send us a crash report from the app's Settings → Help → Report a Bug."
  },
  {
    id: 73,
    category: "Technical Issues",
    mostAsked: false,
    question: "Can I use the platform offline?",
    answer: "The web app requires an internet connection. However, our desktop and mobile apps offer offline mode. When you lose connection, you can still view cached projects, create tasks, and edit content. Changes sync automatically when you reconnect. To use offline mode, open the app while online first (to cache your data), then you can work offline. Note: file uploads and real-time collaboration require an internet connection."
  },
  {
    id: 74,
    category: "Technical Issues",
    mostAsked: false,
    question: "Why are my changes not saving?",
    answer: "Changes not saving is usually a connectivity issue. Look for the sync indicator in the top-right corner: <strong>Green check</strong> = saved, <strong>Spinning icon</strong> = syncing, <strong>Red X</strong> = not connected. If you see a red X: (1) Check your internet connection. (2) Don't close the tab — your changes are stored locally and will sync when reconnected. (3) If you accidentally closed the tab, reopen it and your recent changes should still be there. If data is truly lost, contact support immediately."
  },
  {
    id: 75,
    category: "Technical Issues",
    mostAsked: false,
    question: "How do I report a bug?",
    answer: "Click the '?' icon in the bottom-left corner → Report a Bug. Fill out the form with: what you were doing, what you expected to happen, what actually happened, and your browser/device info. Screenshots or screen recordings are very helpful. You can also email bugs@helpcenter.com. We review all bug reports within 24 hours and you'll receive updates on the status of your report."
  },
  {
    id: 76,
    category: "Technical Issues",
    mostAsked: false,
    question: "Why do I see a '502 Bad Gateway' error?",
    answer: "A 502 error means there's a temporary communication issue between our servers. This is almost always on our end and gets resolved automatically within 5–15 minutes. Check our status page at status.helpcenter.com for updates. If the error persists for more than 30 minutes, contact support. Your data is safe — 502 errors never cause data loss."
  },
  {
    id: 77,
    category: "Technical Issues",
    mostAsked: false,
    question: "How do I enable keyboard shortcuts?",
    answer: "Keyboard shortcuts are enabled by default. Press '?' (question mark) anytime to see the full shortcut list. Some essential shortcuts: <strong>Ctrl+N</strong> (Cmd+N on Mac) = New task, <strong>Ctrl+K</strong> = Quick search, <strong>Ctrl+Enter</strong> = Save/Submit, <strong>Esc</strong> = Close modal, <strong>Ctrl+Z</strong> = Undo. You can customize shortcuts in Settings → Preferences → Keyboard Shortcuts."
  },
  {
    id: 78,
    category: "Technical Issues",
    mostAsked: false,
    question: "Why are images not loading in the app?",
    answer: "Image loading issues can be caused by: (1) <strong>Slow internet</strong> — images may take longer on slow connections. (2) <strong>Ad blocker</strong> — some ad blockers block image loading. Whitelist our site in your ad blocker. (3) <strong>Browser extensions</strong> — try disabling extensions one by one. (4) <strong>Corrupted cache</strong> — clear your browser cache. (5) <strong>Image format</strong> — we support JPG, PNG, GIF, WebP, and SVG. If the issue persists, try a different browser."
  },
  {
    id: 79,
    category: "Technical Issues",
    mostAsked: false,
    question: "Can I use the platform with screen readers?",
    answer: "Yes, our platform is WCAG 2.1 AA compliant and works with major screen readers including NVDA, JAWS, and VoiceOver. All interactive elements have proper ARIA labels, focus indicators are visible, and the interface is fully navigable with keyboard only. If you encounter any accessibility issues, please report them to accessibility@helpcenter.com and we'll prioritize fixing them."
  },
  {
    id: 80,
    category: "Technical Issues",
    mostAsked: false,
    question: "Why is the search function not working?",
    answer: "If search isn't returning results: (1) <strong>Check spelling</strong> — search is not fuzzy, so typos matter. (2) <strong>Use fewer keywords</strong> — too many filters can narrow results to zero. (3) <strong>Check filters</strong> — make sure you haven't accidentally filtered by date, category, or status. (4) <strong>Indexing delay</strong> — newly created content may take up to 5 minutes to appear in search. (5) <strong>Clear search</strong> — click the X in the search bar and try again."
  },
  {
    id: 81,
    category: "Technical Issues",
    mostAsked: false,
    question: "How do I change my timezone settings?",
    answer: "Go to Settings → Preferences → Timezone. Select your timezone from the dropdown. This affects how dates and times are displayed across the platform, including task due dates, calendar views, and notification scheduling. Changes apply immediately and don't affect other team members' timezone settings."
  },
  {
    id: 82,
    category: "Technical Issues",
    mostAsked: false,
    question: "Why is the calendar view not showing all my tasks?",
    answer: "The calendar view only shows tasks that have a due date set. Tasks without due dates won't appear. To fix: (1) Open tasks without due dates and add a date. (2) Check the calendar filters — make sure all relevant projects and labels are selected. (3) Ensure your timezone is set correctly, as tasks may appear on different dates based on timezone."
  },
  {
    id: 83,
    category: "Technical Issues",
    mostAsked: false,
    question: "How do I recover accidentally deleted items?",
    answer: "Deleted tasks, projects, and files go to the Trash where they're stored for 30 days. Go to the sidebar → Trash to view and restore deleted items. Click the three-dot menu next to any item and select 'Restore.' After 30 days, items are permanently deleted and cannot be recovered. Enterprise users can extend the trash retention period up to 90 days in workspace settings."
  },
  {
    id: 84,
    category: "Technical Issues",
    mostAsked: false,
    question: "Can I customize the dashboard layout?",
    answer: "Yes. The dashboard is fully customizable. Click 'Customize' in the top-right corner of the dashboard. You can: add, remove, and resize widgets; drag and drop to reorder; choose from widget types (task summary, activity feed, calendar, charts, quick actions); and save multiple layouts for different views. Your layout is saved automatically and synced across devices."
  },
  {
    id: 85,
    category: "Technical Issues",
    mostAsked: false,
    question: "Why am I seeing a 'Rate Limit Exceeded' message?",
    answer: "This message appears when you've made too many requests in a short period. Limits are: 100 requests/minute on free, 500 on Pro, and 2,000 on Enterprise. This usually happens when using the API or bulk operations. Wait 60 seconds and try again. If you're hitting limits regularly, consider upgrading your plan or optimizing your API usage with batch requests."
  },
  {
    id: 86,
    category: "Technical Issues",
    mostAsked: false,
    question: "How do I enable or disable auto-save?",
    answer: "Auto-save is enabled by default and cannot be fully disabled (to prevent data loss). However, you can adjust the auto-save frequency in Settings → Preferences → Auto-save. Options are: 'Instant' (saves every keystroke), 'Every 5 seconds', or 'Every 30 seconds'. We recommend 'Instant' for the best data protection."
  },

  // ===================== PRIVACY & SECURITY (19) =====================
  {
    id: 87,
    category: "Privacy & Security",
    mostAsked: true,
    question: "How do you protect my personal data?",
    answer: "We take data protection extremely seriously. Your data is encrypted at rest (AES-256) and in transit (TLS 1.3). We undergo annual SOC 2 Type II audits and are GDPR, CCPA, and HIPAA compliant. Our infrastructure is hosted on AWS with multi-region redundancy. We never sell your data to third parties. Access to your data is restricted to authorized personnel only, with full audit logging. You can read our full security whitepaper at security.helpcenter.com."
  },
  {
    id: 88,
    category: "Privacy & Security",
    mostAsked: true,
    question: "Can I download a copy of all my data?",
    answer: "Yes. Under GDPR and CCPA, you have the right to data portability. Go to Settings → Privacy → Download My Data. Select what you want to include (profile info, projects, tasks, comments, files, activity logs) and click 'Request Export.' You'll receive a secure download link via email within 24–48 hours. The export is available for 7 days and is password-protected."
  },
  {
    id: 89,
    category: "Privacy & Security",
    mostAsked: false,
    question: "Do you share my data with third parties?",
    answer: "We do not sell, rent, or trade your personal data. We only share data with: (1) <strong>Service providers</strong> who help us operate the platform (e.g., hosting, payment processing) — these providers are bound by strict data processing agreements. (2) <strong>Law enforcement</strong> when required by law — we'll notify you unless legally prohibited. (3) <strong>Business transfers</strong> — in case of a merger or acquisition, your data would be transferred under the same privacy terms. You can view our full Privacy Policy at helpcenter.com/privacy."
  },
  {
    id: 90,
    category: "Privacy & Security",
    mostAsked: false,
    question: "How do I enable two-factor authentication?",
    answer: "Go to Settings → Security → Two-Factor Authentication. We recommend using an authenticator app (Google Authenticator, Authy, or 1Password) over SMS for better security. After enabling, you'll receive 10 backup codes — store them securely. 2FA is required for all Enterprise workspace admins and highly recommended for all users."
  },
  {
    id: 91,
    category: "Privacy & Security",
    mostAsked: false,
    question: "Can I request deletion of my data?",
    answer: "Yes. Under GDPR, you have the 'right to be forgotten.' Go to Settings → Privacy → Delete My Data. You can choose to delete specific data types or everything. Complete account deletion is also available. Deletion requests are processed within 30 days. You'll receive a confirmation email when deletion is complete. Note: some data may be retained longer if required by law (e.g., financial records for tax purposes)."
  },
  {
    id: 92,
    category: "Privacy & Security",
    mostAsked: false,
    question: "Is my communication on the platform encrypted?",
    answer: "Yes. All data transmitted between your device and our servers is encrypted using TLS 1.3. Messages, comments, and files stored on our servers are encrypted at rest using AES-256 encryption. For Enterprise customers, we offer end-to-end encryption for sensitive communications using client-side encryption keys that only your team controls."
  },
  {
    id: 93,
    category: "Privacy & Security",
    mostAsked: false,
    question: "How do I manage cookie preferences?",
    answer: "When you first visit our site, you'll see a cookie consent banner. You can choose to accept all cookies, reject non-essential cookies, or customize your preferences. You can change your cookie preferences anytime by clicking the 'Cookie Settings' link in the footer. Essential cookies (for login and security) cannot be disabled. Analytics and marketing cookies are optional and can be toggled off."
  },
  {
    id: 94,
    category: "Privacy & Security",
    mostAsked: false,
    question: "Are you GDPR compliant?",
    answer: "Yes, we are fully GDPR compliant. Key measures include: explicit consent for data processing, data portability, right to erasure, data breach notification within 72 hours, Data Protection Officer (DPO) appointment, and regular privacy impact assessments. We also offer a Data Processing Agreement (DPA) for enterprise customers. Contact privacy@helpcenter.com for any GDPR-related inquiries."
  },
  {
    id: 95,
    category: "Privacy & Security",
    mostAsked: false,
    question: "What happens to my data if the company shuts down?",
    answer: "In the unlikely event of company closure, we are committed to providing at least 90 days' notice. During this period, you'll be able to export all your data. If no buyer is found, all user data will be securely destroyed following industry-standard data destruction practices. This commitment is outlined in our Terms of Service."
  },
  {
    id: 96,
    category: "Privacy & Security",
    mostAsked: false,
    question: "Can I set up IP restrictions for my workspace?",
    answer: "IP restrictions are available on the Enterprise plan. Go to Settings → Security → IP Restrictions. You can specify allowed IP addresses or ranges (CIDR notation). Only users connecting from these IPs will be able to access the workspace. You can also set up geo-restrictions to block access from specific countries. Changes take effect immediately."
  },
  {
    id: 97,
    category: "Privacy & Security",
    mostAsked: false,
    question: "How do you handle data breaches?",
    answer: "We have a comprehensive incident response plan. If a breach occurs: (1) We detect and contain it within hours using automated monitoring. (2) Our security team investigates the scope and impact. (3) Affected users are notified within 72 hours (as required by GDPR). (4) We publish a transparent incident report on our status page. (5) We implement additional security measures to prevent recurrence. We've never had a significant data breach, and we conduct penetration testing quarterly."
  },
  {
    id: 98,
    category: "Privacy & Security",
    mostAsked: false,
    question: "Can I hide my profile from other team members?",
    answer: "On free and Pro plans, your profile (name, email, avatar) is visible to all members of your workspaces. On Enterprise plans, you can set your profile to 'Private' in Settings → Privacy → Profile Visibility. When set to private, other members will see only your display name and avatar — your email and activity status will be hidden. Admins can still see your email for billing and management purposes."
  },
  {
    id: 99,
    category: "Privacy & Security",
    mostAsked: false,
    question: "Do you use my data to train AI models?",
    answer: "No. We do not use your data, content, or communications to train any AI models — ours or third parties'. Your data is used solely to provide and improve the platform services you've subscribed to. If we ever change this policy, we will notify all users in advance and obtain explicit consent. This commitment is documented in our Privacy Policy."
  },
  {
    id: 100,
    category: "Privacy & Security",
    mostAsked: false,
    question: "How often do you perform security audits?",
    answer: "We perform: <strong>Quarterly</strong> penetration testing by independent security firms. <strong>Annually</strong> SOC 2 Type II audits. <strong>Continuous</strong> automated vulnerability scanning. <strong>Bi-annually</strong> code reviews by our internal security team. We also run a bug bounty program through HackerOne, paying security researchers who discover vulnerabilities. All audit reports (redacted) are available to Enterprise customers."
  },
  {
    id: 101,
    category: "Privacy & Security",
    mostAsked: false,
    question: "Can I control who sees my activity status?",
    answer: "Yes. Go to Settings → Privacy → Activity Status. You can choose: <strong>Visible to everyone</strong> (default), <strong>Visible to workspace members only</strong>, or <strong>Hidden</strong>. When hidden, others won't see when you're online, last active, or currently viewing a document. Note: Admins can still see your last login time for security purposes."
  },
  {
    id: 102,
    category: "Privacy & Security",
    mostAsked: false,
    question: "What encryption standards do you use?",
    answer: "We use industry-leading encryption: <strong>Data in transit:</strong> TLS 1.3 with perfect forward secrecy. <strong>Data at rest:</strong> AES-256 encryption. <strong>Database encryption:</strong> Transparent Data Encryption (TDE). <strong>Key management:</strong> AWS KMS with automatic key rotation every 90 days. <strong>Enterprise E2E encryption:</strong> Client-side AES-256-GCM with user-managed keys. All cryptographic implementations are reviewed by third-party experts annually."
  },
  {
    id: 103,
    category: "Privacy & Security",
    mostAsked: false,
    question: "How do I opt out of marketing emails?",
    answer: "Click the 'Unsubscribe' link at the bottom of any marketing email. You can also manage email preferences in Settings → Notifications → Marketing Emails. Opting out of marketing emails doesn't affect transactional emails (billing receipts, security alerts, password resets). You'll continue to receive essential communications even after unsubscribing from marketing."
  },
  {
    id: 104,
    category: "Privacy & Security",
    mostAsked: false,
    question: "Is my data stored in the EU or US?",
    answer: "By default, data is stored in US-based AWS regions (Virginia and Oregon). EU customers can request EU data residency during signup or from Settings → Privacy → Data Region. We offer data centers in Frankfurt (EU), London (UK), and Tokyo (APAC). Enterprise customers can specify exact regions. Data never crosses regions unless explicitly requested by you."
  },
  {
    id: 105,
    category: "Privacy & Security",
    mostAsked: false,
    question: "How do I report a security vulnerability?",
    answer: "We welcome responsible disclosure. Report vulnerabilities to security@helpcenter.com or through our HackerOne program at hackerone.com/helpcenter. Include: a detailed description, steps to reproduce, potential impact, and any proof of concept. We respond within 24 hours and offer bounty rewards ranging from $100 to $10,000 based on severity. Please do not publicly disclose vulnerabilities before we've had a chance to fix them."
  }
];

// ============================================================
// 2. CATEGORY DEFINITIONS
// ============================================================
const CATEGORIES = [
  { key: "All", icon: "📋" },
  { key: "General", icon: "💬" },
  { key: "Account & Login", icon: "🔑" },
  { key: "Payments & Refunds", icon: "💳" },
  { key: "Technical Issues", icon: "🔧" },
  { key: "Privacy & Security", icon: "🛡️" }
];

// Badge class mapping for category labels
const BADGE_MAP = {
  "General": "badge-general",
  "Account & Login": "badge-account",
  "Payments & Refunds": "badge-payments",
  "Technical Issues": "badge-technical",
  "Privacy & Security": "badge-privacy"
};

// ============================================================
// 3. APP STATE
// ============================================================
const state = {
  activeCategory: "All",
  searchQuery: "",
  expandedItems: new Set(),
  isLoading: true
};

// ============================================================
// 4. DOM REFERENCES
// ============================================================
const DOM = {
  themeToggle: document.getElementById("themeToggle"),
  searchInput: document.getElementById("searchInput"),
  searchClear: document.getElementById("searchClear"),
  searchStatus: document.getElementById("searchStatus"),
  categoryTabs: document.getElementById("categoryTabs"),
  faqList: document.getElementById("faqList"),
  mostAskedList: document.getElementById("mostAskedList"),
  noResults: document.getElementById("noResults"),
  totalCount: document.getElementById("totalCount"),
  visibleCount: document.getElementById("visibleCount"),
  expandAllBtn: document.getElementById("expandAllBtn"),
  collapseAllBtn: document.getElementById("collapseAllBtn"),
  resetSearch: document.getElementById("resetSearch"),
  controlsBar: document.getElementById("controlsBar"),
  mostAskedSection: document.getElementById("mostAskedSection")
};

// ============================================================
// 5. THEME MANAGEMENT
// ============================================================
function initTheme() {
  const saved = localStorage.getItem("faq-theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("faq-theme", next);
}

// ============================================================
// 6. SEARCH WITH DEBOUNCE
// ============================================================
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function handleSearch() {
  const query = DOM.searchInput.value.trim().toLowerCase();
  state.searchQuery = query;
  state.expandedItems.clear(); // Reset expanded items on new search

  // Toggle clear button
  DOM.searchClear.hidden = !query;

  // Update status
  if (query) {
    const results = getFilteredFAQs();
    DOM.searchStatus.textContent = `Found ${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`;
  } else {
    DOM.searchStatus.textContent = "";
  }

  renderFAQs();
  updateVisibleCount();
  toggleNoResults();
}

const debouncedSearch = debounce(handleSearch, 250);

function clearSearch() {
  DOM.searchInput.value = "";
  state.searchQuery = "";
  state.expandedItems.clear();
  DOM.searchClear.hidden = true;
  DOM.searchStatus.textContent = "";
  renderFAQs();
  updateVisibleCount();
  toggleNoResults();
  DOM.searchInput.focus();
}

// ============================================================
// 7. FILTERING LOGIC
// ============================================================
function getFilteredFAQs() {
  return FAQ_DATA.filter((faq) => {
    const matchesCategory =
      state.activeCategory === "All" || faq.category === state.activeCategory;

    const matchesSearch =
      !state.searchQuery ||
      faq.question.toLowerCase().includes(state.searchQuery) ||
      faq.answer.toLowerCase().includes(state.searchQuery) ||
      faq.category.toLowerCase().includes(state.searchQuery);

    return matchesCategory && matchesSearch;
  });
}

// ============================================================
// 8. HIGHLIGHT SEARCH MATCHES
// ============================================================
function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${escapeRegex(query)})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ============================================================
// 9. RENDER CATEGORY TABS
// ============================================================
function renderCategoryTabs() {
  DOM.categoryTabs.innerHTML = CATEGORIES
    .map(
      (cat) => `
      <button
        class="cat-tab"
        role="tab"
        aria-selected="${state.activeCategory === cat.key}"
        data-category="${cat.key}"
      >
        ${cat.icon} ${cat.key}
      </button>
    `
    )
    .join("");
}

// ============================================================
// 10. RENDER FAQ ITEMS
// ============================================================
function createFAQItemHTML(faq, index, isMostAsked = false) {
  const isActive = state.expandedItems.has(faq.id);
  const badgeClass = BADGE_MAP[faq.category] || "badge-general";
  const highlightedQuestion = highlightText(faq.question, state.searchQuery);
  const delay = isMostAsked ? index * 50 : index * 40;

  return `
    <article
      class="faq-item fade-in ${isActive ? "active" : ""}"
      data-id="${faq.id}"
      role="article"
      style="animation-delay: ${delay}ms"
    >
      <button
        class="faq-question"
        aria-expanded="${isActive}"
        aria-controls="answer-${faq.id}"
        id="question-${faq.id}"
      >
        <span class="q-text">${highlightedQuestion}</span>
        <span class="faq-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </button>
      <div
        class="faq-answer"
        id="answer-${faq.id}"
        role="region"
        aria-labelledby="question-${faq.id}"
      >
        <div class="faq-answer-inner">
          <span class="faq-category-badge ${badgeClass}">${faq.category}</span>
          <p>${faq.answer}</p>
        </div>
      </div>
    </article>
  `;
}

function renderFAQs() {
  const filtered = getFilteredFAQs();

  if (filtered.length === 0) {
    DOM.faqList.innerHTML = "";
    return;
  }

  DOM.faqList.innerHTML = filtered
    .map((faq, i) => createFAQItemHTML(faq, i))
    .join("");

  // Apply smooth height to active items
  requestAnimationFrame(() => {
    filtered.forEach((faq) => {
      if (state.expandedItems.has(faq.id)) {
        const answer = document.getElementById(`answer-${faq.id}`);
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      }
    });
  });
}

// ============================================================
// 11. RENDER MOST ASKED
// ============================================================
function renderMostAsked() {
  const mostAsked = FAQ_DATA.filter((f) => f.mostAsked);
  DOM.mostAskedList.innerHTML = mostAsked
    .map((faq, i) => createFAQItemHTML(faq, i, true))
    .join("");

  // Set heights for already expanded items
  requestAnimationFrame(() => {
    mostAsked.forEach((faq) => {
      if (state.expandedItems.has(faq.id)) {
        const answer = document.getElementById(`answer-${faq.id}`);
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      }
    });
  });
}

// ============================================================
// 12. SKELETON LOADER
// ============================================================
function showSkeleton() {
  const skeletonHTML = Array(5)
    .fill("")
    .map(
      () => `
      <div class="skeleton-item">
        <div class="skeleton-line" style="width: 85%"></div>
        <div class="skeleton-line" style="width: 60%"></div>
      </div>
    `
    )
    .join("");

  DOM.faqList.innerHTML = skeletonHTML;
  DOM.mostAskedList.innerHTML = skeletonHTML;
}

function hideSkeleton() {
  state.isLoading = false;
  renderCategoryTabs();
  renderMostAsked();
  renderFAQs();
  DOM.totalCount.textContent = FAQ_DATA.length;
  updateVisibleCount();
}

// ============================================================
// 13. ACCORDION TOGGLE
// ============================================================
function toggleFAQ(id, targetAnswer) {
  const item = targetAnswer.closest(".faq-item");
  const isExpanded = state.expandedItems.has(id);

  if (isExpanded) {
    // Collapse
    state.expandedItems.delete(id);
    targetAnswer.style.maxHeight = targetAnswer.scrollHeight + "px";
    requestAnimationFrame(() => {
      targetAnswer.style.maxHeight = "0px";
    });
    item.classList.remove("active");
    item.querySelector(".faq-question").setAttribute("aria-expanded", "false");
  } else {
    // Collapse all other open items (single-open behavior)
    state.expandedItems.forEach((openId) => {
      if (openId !== id) {
        const otherAnswer = document.getElementById(`answer-${openId}`);
        const otherItem = otherAnswer?.closest(".faq-item");
        if (otherAnswer && otherItem) {
          state.expandedItems.delete(openId);
          otherAnswer.style.maxHeight = otherAnswer.scrollHeight + "px";
          requestAnimationFrame(() => {
            otherAnswer.style.maxHeight = "0px";
          });
          otherItem.classList.remove("active");
          otherItem
            .querySelector(".faq-question")
            .setAttribute("aria-expanded", "false");
        }
      }
    });

    // Expand clicked
    state.expandedItems.add(id);
    item.classList.add("active");
    item.querySelector(".faq-question").setAttribute("aria-expanded", "true");
    targetAnswer.style.maxHeight = targetAnswer.scrollHeight + "px";
  }

  // Update visible count
  updateVisibleCount();
}

// ============================================================
// 14. EXPAND / COLLAPSE ALL
// ============================================================
function expandAll() {
  const filtered = getFilteredFAQs();
  filtered.forEach((faq) => state.expandedItems.add(faq.id));

  document.querySelectorAll(".faq-item").forEach((item) => {
    const id = parseInt(item.dataset.id);
    if (state.expandedItems.has(id)) {
      const answer = item.querySelector(".faq-answer");
      item.classList.add("active");
      item.querySelector(".faq-question").setAttribute("aria-expanded", "true");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });

  updateVisibleCount();
}

function collapseAll() {
  state.expandedItems.clear();

  document.querySelectorAll(".faq-item").forEach((item) => {
    const answer = item.querySelector(".faq-answer");
    item.classList.remove("active");
    item.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    answer.style.maxHeight = "0px";
  });

  updateVisibleCount();
}

// ============================================================
// 15. UPDATE COUNTS & NO RESULTS
// ============================================================
function updateVisibleCount() {
  const filtered = getFilteredFAQs();
  const openCount = state.expandedItems.size;
  DOM.visibleCount.textContent = `${filtered.length} question${filtered.length !== 1 ? "s" : ""} • ${openCount} open`;
}

function toggleNoResults() {
  const filtered = getFilteredFAQs();
  if (filtered.length === 0 && (state.searchQuery || state.activeCategory !== "All")) {
    DOM.noResults.hidden = false;
    DOM.faqList.style.display = "none";
    DOM.mostAskedSection.style.display = "none";
    DOM.controlsBar.style.display = "none";
  } else {
    DOM.noResults.hidden = true;
    DOM.faqList.style.display = "";
    DOM.mostAskedSection.style.display = "";
    DOM.controlsBar.style.display = "";
  }
}

// ============================================================
// 16. EVENT LISTENERS (Event Delegation)
// ============================================================
function bindEvents() {
  // Theme toggle
  DOM.themeToggle.addEventListener("click", toggleTheme);

  // Search
  DOM.searchInput.addEventListener("input", debouncedSearch);
  DOM.searchClear.addEventListener("click", clearSearch);

  // Category tabs (delegated)
  DOM.categoryTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".cat-tab");
    if (!tab) return;

    const category = tab.dataset.category;
    state.activeCategory = category;
    state.expandedItems.clear();

    // Update tab aria-selected
    DOM.categoryTabs.querySelectorAll(".cat-tab").forEach((t) => {
      t.setAttribute("aria-selected", t.dataset.category === category);
    });

    renderFAQs();
    updateVisibleCount();
    toggleNoResults();
  });

  // FAQ accordion toggle (delegated on both lists)
  document.addEventListener("click", (e) => {
    const questionBtn = e.target.closest(".faq-question");
    if (!questionBtn) return;

    const faqItem = questionBtn.closest(".faq-item");
    const id = parseInt(faqItem.dataset.id);
    const answer = document.getElementById(`answer-${id}`);
    if (answer) toggleFAQ(id, answer);
  });

  // Expand / Collapse All
  DOM.expandAllBtn.addEventListener("click", expandAll);
  DOM.collapseAllBtn.addEventListener("click", collapseAll);

  // Reset search
  DOM.resetSearch.addEventListener("click", () => {
    state.searchQuery = "";
    state.activeCategory = "All";
    state.expandedItems.clear();
    DOM.searchInput.value = "";
    DOM.searchClear.hidden = true;
    DOM.searchStatus.textContent = "";

    DOM.categoryTabs.querySelectorAll(".cat-tab").forEach((t) => {
      t.setAttribute("aria-selected", t.dataset.category === "All");
    });

    renderFAQs();
    updateVisibleCount();
    toggleNoResults();
  });

  // Keyboard navigation for FAQ items
  document.addEventListener("keydown", (e) => {
    const questionBtn = document.activeElement;
    if (!questionBtn?.classList.contains("faq-question")) return;

    const faqItem = questionBtn.closest(".faq-item");
    const allQuestions = Array.from(
      document.querySelectorAll(".faq-question")
    ).filter((q) => q.offsetParent !== null);
    const currentIndex = allQuestions.indexOf(questionBtn);

    if (e.key === "ArrowDown" && currentIndex < allQuestions.length - 1) {
      e.preventDefault();
      allQuestions[currentIndex + 1].focus();
    } else if (e.key === "ArrowUp" && currentIndex > 0) {
      e.preventDefault();
      allQuestions[currentIndex - 1].focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      allQuestions[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      allQuestions[allQuestions.length - 1]?.focus();
    }
  });
}

// ============================================================
// 17. INITIALIZATION
// ============================================================
function init() {
  initTheme();
  showSkeleton();
  bindEvents();

  // Simulate loading delay for skeleton effect
  setTimeout(() => {
    hideSkeleton();
  }, 800);
}

// Start the app when DOM is ready
document.addEventListener("DOMContentLoaded", init);
