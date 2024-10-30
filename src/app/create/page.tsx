import Navbar from '../components/Navbar';
import PromptUploadForm from '../components/PromptUploadForm';
import StarField from '../components/StarField';

export default function Create() {
    return (
        <div className="min-h-screen font-prompt bg-gradient-to-br from-purple-400 via-purple-600 to-blue-700">      
            <StarField starCount={300} className="h-screen">            <Navbar />
                <PromptUploadForm/>
            </StarField>
        </div>
    );
}