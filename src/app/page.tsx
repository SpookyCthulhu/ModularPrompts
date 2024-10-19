import Image from 'next/image';
import Link from 'next/link';
import source from './images/logo.png';
import Navbar from './components/Navbar';
import Button from './components/Button';
import StarField from './components/StarField';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-600 to-blue-700">      
      <StarField starCount={120} className="h-screen">
      <Navbar />
      <div className='flex flex-col justify-center items-center'>
        <Image src={source} alt='ModularPrompts logo' className='w-1/8 p-12 box-content'/>
        <h1 className="text-9xl pb-4">ModularPrompts</h1>
        <p className='w-1/3 text-center pb-4 text-xl'>ModularPrompts offers an extensible library of prompts and premade tools
to assist in the production of LLM workflows and Agents.</p>
        <Button text='Login' link=""/>
        <Button text='Register' link=""/>
        <Link href="">Learn More</Link>
      </div>
      </StarField>
    </div>
  );
}
