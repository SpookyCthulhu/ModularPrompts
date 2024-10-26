import Navbar from '../components/Navbar';
import Button from '../components/Button';
import StarField from '../components/StarField';

export default function Login() {
    return (
        <div className="min-h-screen font-prompt bg-gradient-to-br from-purple-400 via-purple-600 to-blue-700">      
            <StarField starCount={120} className="h-screen w-full">
                <Navbar />
                <div className='flex justify-center items-center h-screen pb-16'>
                    <div className='w-2/3 h-4/5 bg-white rounded-lg shadow-lg'></div>
                </div>
            </StarField>
        </div>
    );
}