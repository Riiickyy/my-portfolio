// Funnel and landing page case studies. `stat` is the highlight on the card:
// give it a number `value` to count up, or `text` to show as-is.
// `fit: 'contain'` shows the whole mockup image instead of cropping it.
// TODO(Ricky): check these numbers and wording against your full drafts.
export const caseStudies = [
  {
    id: 'opt-in-booking',
    title: 'From opt-ins to more booking opportunities',
    kicker: 'Case Study 01 · Opt-in to Booking Funnel',
    image: '/images/case-studies/opt-in-funnel.png',
    fit: 'contain',
    url: '#',
    stat: { prefix: '₱', value: 800, suffix: 'K', label: 'in sales' },
    summary:
      'The client had nearly 1,000 visitors reach their opt-in page, but only a few opted in, limiting the number of people moving toward a booked call.',
    tags: ['Landing Page', 'Funnel', 'Copy', 'Automation'],
    details: [
      { title: 'Clarified the messaging', text: 'Reworked the messaging so the right audience could quickly recognise that the offer was for them.' },
      { title: 'Made the offer easier to understand', text: 'Clearly showed what visitors would get after opting in, giving them a stronger reason to take action.' },
      { title: 'Improved the page flow', text: 'Reorganised the content so visitors moved naturally from understanding the offer to building trust and taking the next step.' },
      { title: 'Strengthened the CTA', text: 'Made the call to action clearer and more intentional, so visitors knew exactly what would happen next.' },
      { title: 'Built nurture and follow-up emails', text: 'Created email sequences to keep nurturing leads, encourage bookings and follow up with prospects who weren’t ready yet.' },
    ],
    result:
      'Combined with the nurture and follow-up journey, the funnel helped move more leads toward sales conversations and generated over ₱800K in gross sales for the client’s high-ticket offer.',
  },
  {
    id: 'event-sales',
    title: 'Building the systems behind a successful event launch',
    kicker: 'Case Study 02 · Event Sales Funnel',
    image: '/images/case-studies/event-funnel.png',
    fit: 'contain',
    url: '#',
    stat: { prefix: '', value: 50, suffix: '+', label: 'seats sold' },
    summary:
      'The client was preparing to launch an in-person event in Manila. The sales page was already in place, but the funnel behind it still needed to connect registration, payment, email communication and CRM management into one working journey.',
    tags: ['Sales Funnel', 'Email', 'CRM', 'Payments'],
    details: [
      { title: 'Connected the funnel journey', text: 'Connected the forms, workflows, payment process and CRM so leads moved smoothly from registration to the next steps.' },
      { title: 'Set up the email campaign', text: 'Built the email campaign needed to communicate with prospects, follow up and support the event launch.' },
      { title: 'Re-engaged the existing audience', text: 'Used the client’s existing email list to reconnect with previous leads and bring relevant prospects back into the campaign.' },
      { title: 'Supported the funnel strategy', text: 'Contributed ideas around the sales funnel and customer journey to help connect the campaign, registration process and event experience.' },
    ],
    result:
      'With the funnel systems connected and the campaign supported by email and CRM workflows, the client successfully launched the event and filled nearly 50+ seats.',
  },
  {
    id: 'quiz-funnel',
    title: 'Turning a quiz into a path toward qualified sales conversations',
    kicker: 'Case Study 03 · Quiz Funnel',
    image: '/images/case-studies/quiz-funnel.png',
    fit: 'contain',
    url: '#',
    stat: { text: 'Segmented', label: 'leads' },
    summary:
      'The client wanted more than a simple quiz. They needed a funnel that could help prospects evaluate where their business currently stood, segment leads based on their responses and guide them toward the appropriate next step.',
    tags: ['Quiz Funnel', 'Segmentation', 'Automation'],
    details: [
      { title: 'Simplified the quiz experience', text: 'Structured the quiz to make the questions and choices easy to understand, helping prospects move through the assessment without friction.' },
      { title: 'Built lead segmentation', text: 'Set up workflows that segmented leads based on their quiz responses, giving the client a better way to understand and manage different prospects.' },
      { title: 'Created the booking journey', text: 'Added a booking opportunity to the quiz experience, giving qualified prospects a clear next step after completing it.' },
      { title: 'Built the follow-up system', text: 'Created automated email sequences and workflows to continue nurturing leads after the quiz and move potential customers toward a conversation.' },
    ],
    result:
      'The completed funnel gave the client a structured way to capture, evaluate and segment leads instead of treating every prospect the same, and created a direct path from quiz to follow-up and booking.',
  },
]
