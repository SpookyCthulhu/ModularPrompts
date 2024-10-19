import Link from 'next/link';

interface ButtonProps {
  text: string;
  link: string;
}

export default function Button({ text, link }: ButtonProps) {
  return (
    <Link href={link} className='p-4'>
      <div className="w-64 px-4 py-2 bg-black drop-shadow-lg text-white text-center text-xl rounded-lg hover:bg-gray-800 cursor-pointer">
        {text}
      </div>
    </Link>
  );
}

