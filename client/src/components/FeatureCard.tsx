import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="min-w-[300px] h-[300px] bg-[#0d0d0d] rounded-xl border-2 border-[#2a2a2a] p-6 flex flex-col hover:border-[#331a0b] transition-all duration-500 ease-in-out group hover:scale-[0.98]">
    <div className="w-12 h-12 bg-[#18100a] rounded-xl mb-4 flex items-center justify-center group-hover:scale-95 transition-all duration-500">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-white mb-2 font-onest">{title}</h4>
    <p className="text-text-gray leading-relaxed font-onest">
      {description}
    </p>
  </div>
);

export default FeatureCard; 