import PropTypes from "prop-types";

const SkillBadge = ({ icon, text }) => (
  <div className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
    <span className="mr-1">{icon}</span>
    <span className="text-sm font-medium">{text}</span>
  </div>
);
SkillBadge.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

const ProgressBar = ({ label, value, color }) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <span className="text-sm font-medium text-white">{label}</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div 
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);
ProgressBar.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
    };

const ProgressCircle = ({ value, color, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-24 h-24">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#444"
          strokeWidth="3"
          strokeDasharray="100, 100"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={`${value}, 100`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-lg font-semibold">{value}%</span>
      </div>
    </div>
    <span className="mt-2 text-white text-sm">{label}</span>
  </div>
);
ProgressCircle.propTypes = {
    value: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
    };

const SkillsSection = () => {
  const languages = [
    { icon: "🌐", text: "HTML" },
    { icon: "🎨", text: "CSS" },
    { icon: "JS", text: "JavaScript" },
    { icon: "TS", text: "TypeScript" },
    { icon: "PHP", text: "PHP" },
    { icon: "☕", text: "Java" },
    { icon: "🐍", text: "Python" },
    { icon: "C", text: "C" },
    { icon: "C++", text: "C++" },
    { icon: "C#", text: "C#" },
    { icon: "🗃️", text: "SQL" },
  ];

  const frameworks = [
    { icon: "⚛️", text: "React" },
    { icon: "Vue", text: "Vue" },
    { icon: "🎯", text: "Svelte" },
    { icon: "N", text: "NextJS" },
    { icon: "Nx", text: "Nuxt" },
    { icon: "🅰️", text: "Angular" },
    { icon: "Lv", text: "Laravel" },
    { icon: "Dj", text: "Django" },
    { icon: "B", text: "Bootstrap" },
    { icon: "Tw", text: "Tailwind" },
  ];

  const tools = [
    { icon: "📝", text: "VS Code" },
    { icon: "🟢", text: "NodeJS" },
    { icon: "Git", text: "Git" },
    { icon: "🐙", text: "GitHub" },
    { icon: "WS", text: "WebStorm" },
    { icon: "🪶", text: "Apache" },
    { icon: "🗄️", text: "MySQL" },
    { icon: "🍃", text: "MongoDB" },
    { icon: "🎼", text: "Composer" },
    { icon: "F", text: "Figma" },
  ];

  return (
    <div className="bg-transparent p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-8">
        <span className="text-yellow-400">Background Skills</span>
        <span className="text-white"> and Accomplishments</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h3 className="text-white text-xl mb-4">Languages</h3>
            <div className="flex flex-wrap">
              {languages.map((lang, index) => (
                <SkillBadge key={index} {...lang} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl mb-4">Frameworks</h3>
            <div className="flex flex-wrap">
              {frameworks.map((framework, index) => (
                <SkillBadge key={index} {...framework} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl mb-4">Tools</h3>
            <div className="flex flex-wrap">
              {tools.map((tool, index) => (
                <SkillBadge key={index} {...tool} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <ProgressBar label="HTML" value={95} color="bg-orange-500" />
          <ProgressBar label="CSS" value={90} color="bg-blue-500" />
          <ProgressBar label="JavaScript" value={85} color="bg-yellow-400" />
          <ProgressBar label="PHP" value={80} color="bg-purple-500" />
          
          <div className="flex justify-between mt-8">
            <ProgressCircle value={78.6} color="#ff7675" label="Lorem" />
            <ProgressCircle value={78.6} color="#74b9ff" label="Lorem" />
            <ProgressCircle value={78.6} color="#ffd32a" label="Lorem" />
            <ProgressCircle value={78.6} color="#55efc4" label="Lorem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;