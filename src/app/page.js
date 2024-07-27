import Image from "next/image";
import HeroSection from "./__components/HeroSection";
import Wrapper from "./__components/Wrapper";
import Card from "./__components/Card";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      {/* Section Start Category  */}
      <Wrapper className="py-10">
        <div className=" mt-10 lg:mt-18">
          <small className=" uppercase font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-800">
            Tools
          </small>
          <h2 className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
            Best Tools for Millions eye
          </h2>
          <div className="my-7 grid sm:grid-cols-2 grid-cols-2 md:grid-cols-4 gap-4 lg:gap-9 xl:grid-cols-5 ">
            <Card
              title="Word Counter"
              imgURL="/Wordcounter-generator-bg.png"
              url="/tools/word-counter"
            />
            <Card title="Text Capitilize" url="/tools/text-uppercase" imgURL="/capital.webp" />
            <Card title="Gradient Generator" url="tools/gradient-generator" imgURL="/gradient.webp" />
            <Card title="Color Generator" url="tools/color-generator" imgURL="/color.webp" />
            <Card title="Slug Generator" url="/tools/slug-generator" imgURL="/slug.webp" />
          </div>
        </div>
        <div className="min-h-20 py-4 md:my-20 flex items-center justify-center bg-no-repeat bg-purple-50 rounded-md bg-[url('/banner-middle-studio.svg')] max-w-[1200px] bg-contain md:bg-cover">
          <div className="flex items-center">
            <div>
              <h2 className="font-bold text-slate-800 text-sm md:text-lg ">
                <span className="font-bold  text-transparent bg-clip-text font-sans bg-gradient-to-r from-purple-700 to-pink-800">AI Generator</span>  Tools Generator Comming Soon{" "}
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-20">
          <small className=" uppercase font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-800">
            Solutions
          </small>
          <h2 className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight ">
            Solutions for Developr
          </h2>

          <div className="grid mt-5 md:mt-9 sm:grid-cols-2 grid-cols-2 md:grid-cols-4 gap-4 lg:gap-9 xl:grid-cols-4 xl:gap-9">
            <Card
              title="Currency Converter"
              imgURL="/currency-convert.jpg"
              url="/solutions/currency-converter"
            />
            <Card title="Temprature Converter" imgURL="/temprature-converter.jpg" url="/solutions/temprature-converter" />
            <Card title="Banners" imgURL="/banner.webp" />
            <Card title="Logos" imgURL="/logoss.webp" />
          </div>
        </div>

        <div className="my-10 lg:my-20  bg-purple-300 rounded-md p-10 bg-gradient-to-r from-purple-800 to-pink-600 ">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-xl md:text-3xl text-white">
              Craft, Innovate, Everywhere.
            </h2>
            <p className="text-white text-center py-2 mb-10">
              Embrace boundless creativity and ingenuity in every corner of
              existence
            </p>
            <a
              href="/"
              className="py-3.5 px-7 bg-white shadow-md rounded-full text-purple-700 font-semibold hover:bg-black hover:text-white"
            >
              Sell Your Content
            </a>
          </div>
        </div>


        <div className="my-10 lg:my-20">
          <small className=" uppercase font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-800">
            Learning
          </small>
          <h2 className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight ">
            Introducing
          </h2>

          <div className="grid mt-5 md:mt-9 sm:grid-cols-2 grid-cols-2 md:grid-cols-4 gap-4 lg:gap-9 xl:grid-cols-4 xl:gap-9">
            <Card
              title="HTML"
              imgURL="/html.webp"
              url="/tools/word-counter"
            />
            <Card title="CSS" imgURL="/css.webp" />
            <Card title="JS" imgURL="/js.webp" />
            <Card title="React" imgURL="/react.webp" />
          </div>
        </div>

      </Wrapper>
    </main>
  );
}
