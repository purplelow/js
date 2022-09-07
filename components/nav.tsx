import Link from "next/link";
import Footer from "./Footer";

export default function Nav() {
  return (
    <div className="items-strat relative z-30 hidden h-full w-[40%] items-end justify-start bg-transparent pt-[2%]  text-[#34495e] transition-shadow xl:flex">
      {/* <div className="my-4 pr-4">
        <div className="h-14 w-full bg-logoWhite bg-contain bg-right bg-no-repeat"></div>
      </div> */}

      <ul className="h-full space-y-12 text-left font-ZenTokyoZoo text-7xl uppercase">
        <li>
          <Link href="/about">
            <a className="hoverEffect_b inline-block cursor-none">About</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/purplelow">
            <a
              target="_blank"
              className="hoverEffect_b inline-block cursor-none"
            >
              Git Hub
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://spectacular-epoch-b6f.notion.site/Front-end-Engineer-Junseong-Lee-53462cd7b12d4f3fa3128640ccc0fc44">
            <a
              target="_blank"
              className="hoverEffect_b inline-block cursor-none"
            >
              Notion
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://velog.io/@purplelow">
            <a
              target="_blank"
              className="hoverEffect_b inline-block cursor-none"
            >
              Velog
            </a>
          </Link>
        </li>
        <li>
          <Link href="http://purplelow.dothome.co.kr/">
            <a
              target="_blank"
              className="hoverEffect_b inline-block cursor-none"
            >
              Design
            </a>
          </Link>
        </li>
      </ul>

      <Footer />
    </div>
  );
}