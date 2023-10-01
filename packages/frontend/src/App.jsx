import { useState } from "react";
import { GithubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkein";
import { PdfIcon } from "./icons/pdf";
import { ThemeButton } from "./components/ThemeButton";
import { SkillLabel } from "./components/SkillLabel";

function App() {
  const [isDark, setIsDark] = useState(true);
  const onHandlerChangeTheme = () => {
    setIsDark((value) => !value);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className=" bg-white dark:bg-violet-950 h-full w-full flex justify-center  text-gray-800 dark:text-violet-100">
        <ThemeButton onClick={onHandlerChangeTheme} />
        <div className="flex flex-col justify-center items-center">
          <div>
            <span className="text-5xl tracking-widest font-semibold">
              Alex Ventura
            </span>
          </div>
          <div>
            <h2 className="text-xl tracking-widest font-semibold text-gray-800 dark:text-slate-200 mt-6">
              Fullstack Developer
            </h2>
          </div>
          <div className="flex mt-4 justify-around">
            <SkillLabel text="Golang" />
            <SkillLabel text="Typescript" />
            <SkillLabel text="AWS" />
            <SkillLabel text="Reactjs" />
          </div>
          <div className="flex mt-1 justify-around">
            <SkillLabel text="Docker" />
            <SkillLabel text="Serverless AWS" />
            <SkillLabel text="Nodejs" />
            <SkillLabel text="Nextjs" />
          </div>
          <div className="flex flex-row mt-8">
            <a
              className="mr-4 ml-4  flex flex-col items-center group"
              href="https://github.com/alexrv11"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
              <span className="mt-2 group-hover:text-blue-400">Github</span>
            </a>
            <a
              className="mr-4 ml-4  flex flex-col items-center group"
              href="https://www.linkedin.com/in/alexventuraq/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              <span className="mt-2 group-hover:text-blue-400">LinkedIn</span>
            </a>
            <a
              className="mr-4 ml-4 flex flex-col items-center group"
              href="https://drive.google.com/file/d/1-6pxrwaK314VxAITfctMo1RDacjsWJgQ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <PdfIcon />
              <span className="mt-2 group-hover:text-blue-400">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
