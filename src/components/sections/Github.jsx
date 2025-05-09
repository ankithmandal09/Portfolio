import React from "react";

const GitHubStats = () => {
  return (
    <section
      id="Github"
      title="Github"
      className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-20 text-white"
    >
      <h2 className="text-4xl font-bold mb-10 relative inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Github Statics
        </span>
        <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-2" />
      </h2>
      <div className="flex flex-col items-center space-y-8">
        <img
          src="https://camo.githubusercontent.com/88ae0d32fd5ca0697aa85ad55b3b7486452f02e3f0cbaf73450f97e3c0d393eb/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e6b6974686d616e64616c3039267468656d653d7261646963616c26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565"
          alt="GitHub Stats"
        />

        <img
          src="https://camo.githubusercontent.com/a7428fc365aee1f77474a6d615690ad1268c3bcde1817ed92a9256870f50caf2/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d616e6b6974686d616e64616c3039267468656d653d7261646963616c26686964655f626f726465723d66616c7365"
          alt="GitHub Streak"
        />

        <img
          src="https://camo.githubusercontent.com/5b971379cf68bfa9379442f06ec45ffd17ebed03317a2915b538e93adb333a8d/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d616e6b6974686d616e64616c3039267468656d653d7261646963616c26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565266c61796f75743d636f6d70616374 "
          alt="Top Languages"
        />
      </div>
    </section>
  );
};

export default GitHubStats;
