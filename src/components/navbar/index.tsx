import Link from "next/link"

const actions = [
    { value: 'About', href: '' },
    { value: 'Blog', href: '' }
]

const NavBar = () => (
    <nav className="flex items-center justify-between">
        <div className="font-logo italic">
            lichee
        </div>
        <div className="flex items-center gap-12">
            {
                actions.map(({ value, href }, i) => (
                    <Action key={i} value={value} href={href} />
                ))
            }
            <button className="rounded-md px-4 py-1 dark:text-black dark:bg-baby-powder">
                Hire Us
            </button>
        </div>
    </nav>
);

export default NavBar;

const Action = ({href, value, ...props}: {href: string, value: string, props?: any}) => (
    <Link 
        href={href}
        className="relative after:absolute after:border-b-[1px] after:transition-all after:top-[120%] after:left-1/2 after:right-1/2 hover:after:left-1/4 hover:after:right-1/4" 
        {...props}
    >
        {value}
    </Link>
)