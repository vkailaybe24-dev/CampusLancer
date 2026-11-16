Root Cause: The React component Talents.jsx contained inherited styling that caused the section heading to retain a white text color even when displayed against a light-colored background.

Technical Impact: The heading "Verified Campus Talent Directory" became difficult to read because of insufficient contrast between the text and its background. This affected the overall readability and visual consistency of the interface.

Detailed Resolution: Updated the component styling by explicitly specifying text colors instead of relying on inherited CSS properties. Applied #111827 to primary headings and #4b5563 to secondary descriptions. This ensured consistent text visibility across different application views.