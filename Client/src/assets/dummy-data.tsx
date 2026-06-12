import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart upload',
        desc: 'Drag & drop your assets. We auto-optimize formats and sizes.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'Optimized models deliver output in second with great fedility.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Being product shots to life with short-form, social-ready videos.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try the platform at no cost.',
        credits: 25,
        features: [
            '25 Credits',
            'Standard quality',
            'No watermark',
            'Slower generation speed',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        desc: 'Creators & small teams.',
        credits: 80,
        features: [
            '80 Credits',
            'HD quality',
            'No watermark',
            'Video generation',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '$99',
        desc: 'Scale across teams and agencies.',
        credits: 300,
        features: [
            '300 Credits',
            'FHD quality',
            'No watermark',
            'Fast generation speed',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does the AI generation work?',
        answer: 'We leverage state-of-the-art diffusion models trained of millions of product images to blend your product into realistic scenes while preserving details lighting and reflections. '
    },
    {
        question: 'Do I own the generated image?',
        answer: 'Yes - you recive to full commercial right to any images and videos generated on the plateform. use them for ads, ecommerce and social media and more.'
    },
    {
        question: 'Can I cancel anytime?',
        answer: 'Yes - you can cancel from your dashboard. you will retain access through the end of your billing period '
    },
    {
        question: 'What input formats do you support?',
        answer: 'We accept JPG, PNG, WEBP. Output are high-resolution PNGs and MP4s optimized for social plateforms.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "Faq", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];