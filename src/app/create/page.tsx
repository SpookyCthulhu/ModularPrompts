import Navbar from '../components/Navbar';
import PromptUploadForm from '../components/PromptUploadForm';

export default function Create() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white flex flex-row w-full h-full justify-center items-center">
                {/* <div className='size-96 m-12 rounded-lg shadow-lg border-2 border-blue-500'></div> */}
                <PromptUploadForm/>
            </div>
        </>
    );
}