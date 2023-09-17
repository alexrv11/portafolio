import { GithubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkein";
import { PdfIcon } from "./icons/pdf";

function App() {
  return (
    <div className="h-full w-full flex justify-center bg-blue-900 text-blue-100">
      <div className="flex flex-col justify-center items-center">
        <div>
          <span className="text-5xl tracking-widest font-semibold">
            Alex Ventura
          </span>
        </div>
        <div>
          <h2 className="text-xl tracking-widest font-semibold text-slate-200 mt-6">
            Fullstack Developer
          </h2>
        </div>
        <div className="flex mt-4 justify-around">
          <span className="inline-flex m-1 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10">
            Golang
          </span>
          <span className="inline-flex m-1 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10">
            Typescript
          </span>
          <span className="inline-flex m-1 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10">
            AWS
          </span>
          <span className="inline-flex m-1 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10">
            Reactjs
          </span>
        </div>
        <div className="flex mt-1 justify-around">
          <span className="inline-flex m-1 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10">
            Docker
          </span>
          <span className="inline-flex m-1 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10">
            Serverless AWS
          </span>
          <span className="inline-flex m-1 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10">
            Nodejs
          </span>
          <span className="inline-flex m-1 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10">
            Nextjs
          </span>
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
  );
}

export default App;
