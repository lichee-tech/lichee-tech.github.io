import { BiSolidUpArrow as ArrowUp } from 'react-icons/bi'

const people = [
    { name: 'Sayan Das', url: '', pic: 'dp_sayan.JPG' },
    { name: 'Soumit Srimany', url: '', pic: 'dp_soumit.JPG' }
]

const HeroSection = () => (
    <div className="flex flex-col justify-center">
        <div className="opacity-0 py-[2em]">
            <BubblePanel people={people} />
        </div>
        <div className="mt-20 mb-10">
            <div className="uppercase text-lg font-black text-neon-blue mb-4 flex">
                What&nbsp;
                <span className="relative underline underline-offset-4 font-logo lowercase italic">
                    <div className="absolute bottom-[calc(100%+1rem)] max-w-0 left-1/2 flex flex-col gap-4 items-center">
                        <BubblePanel people={people}/>
                        <div className='font-thin dark:text-cream'>
                            <ArrowUp/>
                        </div>
                    </div>
                    we
                </span>&nbsp;do
            </div>
            <div className="sm:text-8xl font-bold font-heading  sm:leading-tight">
                Bring your <br /> <Business /> online
                <span className="text-neon-blue">.</span>
            </div>
        </div>
        {/* <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit libero, molestie et gravida a, sodales non dui. Suspendisse potenti. Phasellus nisl ante, posuere vitae efficitur vel, tempus quis nisl. Duis pellentesque ex sit amet velit congue congue. Sed viverra lectus at arcu tempus facilisis.
        </div> */}
        <div className="">
            <button className="px-4 py-3 text-xl rounded dark:bg-cream dark:text-black">Learn More</button>
        </div>
    </div>
);

export default HeroSection;

const Business = () => (
    <span className="">
        business
    </span>
);

const BubblePanel = ({ people }: { people: { pic: string, name: string, url: string }[] }) => (
    <div className="flex gap-4 px-4 py-3 rounded-full dark:bg-cream w-min">
        {
            people.map(({name, pic, url}, i) => (
                <div key={i} className="w-16 h-16 overflow-hidden rounded-full border-[1px] dark:border-[#aaa]">
                    <img src={pic} />
                </div>
            ))
        }
    </div>
)