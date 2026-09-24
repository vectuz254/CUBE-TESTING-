import React, { useState } from 'react';

interface PricingPlan {
  tier: string;
  monthlyPrice: string;
  yearlyPrice: string;
  desc: string;
  features: string[];
  isPro?: boolean;
}

const plans: PricingPlan[] = [
  {
    tier: 'Free',
    monthlyPrice: 'Free',
    yearlyPrice: 'Free',
    desc: 'For creators taking their first steps with Forma.',
    features: [
      'Up to 3 projects in the cloud',
      'Image export up to 1080p',
      'Basic editing tools',
      'Free templates and icons',
      'Access via web and mobile app',
    ],
  },
  {
    tier: 'Standard',
    monthlyPrice: '$9,99/m',
    yearlyPrice: '$99,99/y',
    desc: 'For freelancers and small teams who need more freedom and flexibility.',
    features: [
      'Up to 50 projects in the cloud',
      'Export up to 4K',
      'Advanced editing toolkit',
      'Team collaboration (up to 5 members)',
      'Access to premium template library',
    ],
  },
  {
    tier: 'Pro',
    monthlyPrice: '$19,99/m',
    yearlyPrice: '$199,99/y',
    desc: 'For studios, agencies, and professional creators working with brands.',
    features: [
      'Unlimited projects',
      'Export up to 8K + animations',
      'AI-powered content generation tools',
      'Unlimited team members',
      'Brand customization',
    ],
    isPro: true,
  },
];

export const Pricing: React.FC = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="c3-pricing-section" id="pricing">
      {/* SVG filter local to pricing for watermark overlay */}
      <svg className="sr-only" aria-hidden="true" width="0" height="0">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.075" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>

      {/* Watermark (giant hero headline as backdrop) */}
      <div className="c3-watermark-container pointer-events-none select-none">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Your email.</span>
          <span className="c3-watermark-line-2">Revitalized</span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="c3-grid">
        {plans.map((plan) => {
          const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
          const cardClass = plan.isPro ? 'c3-card c3-card-pro' : 'c3-card';

          return (
            <div key={plan.tier} className={cardClass}>
              <div className="c3-tier-small">{plan.tier}</div>
              <div className="c3-tier-large">{price}</div>
              <div className="c3-desc">{plan.desc}</div>

              <ul className="c3-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="c3-check">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5 text-white"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button type="button" className="c3-btn">
                Choose Plan
              </button>
            </div>
          );
        })}
      </div>

      {/* Yearly Billing Toggle */}
      <div className="c3-toggle-wrap">
        <span className="text-sm font-medium text-white/70">Yearly</span>
        <button
          type="button"
          aria-label="Toggle yearly billing"
          className={`c3-toggle ${yearly ? 'active' : ''}`}
          onClick={() => setYearly(!yearly)}
        >
          <span className="c3-toggle-knob" />
        </button>
      </div>
    </section>
  );
};

export default Pricing;
