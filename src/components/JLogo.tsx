export default function JLogo({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E2C792" />
                    <stop offset="50%" stopColor="#C9A671" />
                    <stop offset="100%" stopColor="#8A6D3B" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <text
                x="50"
                y="75"
                fontFamily='"Cormorant Garamond", Georgia, serif'
                fontSize="75"
                fontWeight="bold"
                fontStyle="italic"
                textAnchor="middle"
                fill="url(#goldGradient)"
                filter="url(#glow)"
            >
                J
            </text>
        </svg>
    );
}
