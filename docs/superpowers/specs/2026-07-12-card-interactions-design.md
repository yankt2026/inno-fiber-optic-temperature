# Card Interaction Design

## Scope

Update the Products, Solutions, Technology, and Resources listing cards. Remove the repeated call-to-action link below each description. Keep the heading as the visible text link, make each card a larger clickable target, and make product images link to their matching product pages.

## Interaction

Cards receive a subtle upward translation, blue border, and restrained shadow on hover. Cards inside tinted sections shift to the engineering light-blue palette. Keyboard focus receives the same visual clarity through `:focus-within`. Motion is disabled when the visitor prefers reduced motion.

## Accessibility

The card wrapper uses a stretched-link technique from the heading anchor, avoiding invalid nested links. Product images use a separate linked image before the stretched heading anchor; the heading remains the primary accessible link. Decorative hover behavior never hides content or changes link labels.

## Acceptance

- No repeated bottom CTA text remains in the four listing pages or homepage listing cards.
- Every product listing image links to the correct product page.
- Every linked card provides hover and keyboard focus feedback.
- Existing responsive layout, image proportions, and static navigation remain intact.
