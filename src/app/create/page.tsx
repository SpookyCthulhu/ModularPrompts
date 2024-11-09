import Navbar from '../components/Navbar';
import DynamicForm from '../components/DynamicForm';
import StarField from '../components/StarField';

export default function Create() {
    return (
        <div className="min-h-screen font-prompt bg-gradient-to-br from-purple-400 via-purple-600 to-blue-700">      
            <StarField starCount={300} className="h-screen">            <Navbar />
                <DynamicForm fields={[
                        { label: 'Prompt', type: 'description', column: 1, fullHeight: true },
                        { label: 'Name', type: 'text', column: 2 },
                        { label: 'Description', type: 'description', column: 2},
                        { label: 'Category', type: 'dropdown', options: [['Option 1', 'Option 2'], ['example1', 'example2']], column: 2 },
                        { label: 'Tags', type: 'tags', column: 2 },
                ]}
                columns={{ col1: 'w-2/3', col2: 'w-1/3' }}
                />
            </StarField>
        </div>
    );
}