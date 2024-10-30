export default function PromptUploadForm() {
    return (
        <div className="h-[calc(100vh-64px)] w-full flex flex-row items-center gap-12 px-8 py-4">
            <div className="flex bg-white h-[80vh] w-2/3 text-black rounded-2xl drop-shadow-lg p-6">
                <div className='bg-purple-400 w-full h-full rounded-2xl drop-shadow-lg'>
                    <h1 className="text-white p-6 text-2xl">Enter Prompt</h1>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-8 bg-white h-[80vh] w-1/3 text-black rounded-2xl drop-shadow-lg p-6 gap-6">
                <div className="flex items-center bg-purple-400 col-span-2 rounded-2xl drop-shadow-lg">
                    <h1 className="text-white text-2xl p-6">Title</h1>
                </div>
                <div className="bg-purple-400 col-span-2 row-span-2 rounded-2xl drop-shadow-lg">
                    <h1 className="text-white text-2xl p-6">Description</h1>
                </div>
                <div className="bg-purple-400 rounded-2xl drop-shadow-lg">
                    <h1 className="text-white text-2xl p-6">^ Model</h1>
                </div>
                <div className="bg-purple-400 rounded-2xl drop-shadow-lg">
                    <h1 className="text-white text-2xl p-6">^ Version</h1>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 bg-purple-400 col-span-2 row-span-2 rounded-2xl drop-shadow-lg">
                    <div className="flex items-center justify-center bg-white rounded-2xl drop-shadow-lg m-2">
                        <h1 className="text-black text-2xl">Testing</h1>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-2xl drop-shadow-lg m-2">
                        <h1 className="text-black text-2xl">Testing</h1>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-2xl drop-shadow-lg m-2">
                        <h1 className="text-black text-2xl">Testing</h1>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-2xl drop-shadow-lg m-2">
                        <h1 className="text-black text-2xl">Testing</h1>
                    </div>
                    <div className='flex items-center justify-center rounded-full border-8 border-white m-2'>
                        <h1 className="text-white text-6xl">+</h1>
                    </div>
                </div>
                <div className="flex items-center justify-center col-span-2">
                    <h1 className='text-2xl'>Advanced Options</h1>
                </div>
                <div className="flex items-center justify-center bg-purple-400 rounded-2xl drop-shadow-lg">
                    <h1 className="text-white text-2xl p-6">Save</h1>
                </div>
                <div className="flex items-center justify-center bg-gradient-to-br from-blue-700 via-purple-600 to-purple-400 rounded-2xl drop-shadow-lg">
                    <h1 className="text-white text-2xl p-6">Publish</h1>
                </div>
            </div>
        </div>
    )
}
