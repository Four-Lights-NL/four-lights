import React from 'react';

type Props = {
	background?: boolean,
	size?: number
}

const FourLightsLogo: React.FC<Props> = ({ background, size }) => {
	size ??= 400
	const step = size / 20
	const spaceStep = (size / 25) * 2.5
	const growSize = 1.25
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width={size} height={size} fill="#1A1A1A" opacity="0" rx={step * 1} ry={step * 1} />

      {/* Four LED lights in grid arrangement */}
      <circle cx={step * 7} cy={step * 7} r={spaceStep} fill="#009cdf">
        {/* Pulsing animation for blue LED */}
        <animate attributeName="fill" from="#009cdf" to="#3498DB" dur="3s" repeatCount="indefinite"/>
        {/* Glow effect */}
        <animate attributeName="r" values={`${spaceStep};${spaceStep * growSize};${spaceStep}`} dur="3s" repeatCount="indefinite"/>
      </circle>

      <circle cx={step * 13} cy={step * 7} r={spaceStep} fill="#fe2e31">
        {/* Pulsing animation for red LED */}
        <animate attributeName="fill" from="#fe2e31" to="#E74C3C" dur="2.5s" repeatCount="indefinite"/>
        {/* Glow effect */}
        <animate attributeName="r" values={`${spaceStep};${spaceStep * growSize};${spaceStep}`} dur="2.5s" repeatCount="indefinite"/>
      </circle>

      <circle cx={step * 7} cy={step * 13} r={spaceStep} fill="#00d06a">
        {/* Pulsing animation for green LED */}
        <animate attributeName="fill" from="#00D06A" to="#2ECC71" dur="4s" repeatCount="indefinite"/>
        {/* Glow effect */}
        <animate attributeName="r" values={`${spaceStep};${spaceStep * growSize};${spaceStep}`} dur="4s" repeatCount="indefinite"/>
      </circle>

      <circle cx={step * 13} cy={step * 13} r={spaceStep} fill="#FF9300">
        {/* Pulsing animation for orange LED */}
        <animate attributeName="fill" from="#FF9300" to="#F39C12" dur="3.5s" repeatCount="indefinite"/>
        {/* Glow effect */}
        <animate attributeName="r" values={`${spaceStep};${spaceStep * growSize};${spaceStep}`} dur="3.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
};

export default FourLightsLogo;

