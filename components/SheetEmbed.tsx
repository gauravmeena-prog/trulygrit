export default function SheetEmbed() {
  return (
    <div className="w-full h-[70vh] rounded-lg overflow-hidden border bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <svg className="w-16 h-16 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Form Submissions</h3>
        <p className="text-gray-600 mb-4">View all contact form submissions in Google Sheets</p>
        <a
          href="https://docs.google.com/spreadsheets/d/1pnszYgqVdK0REQG7f2ASzicFJRci1Mnzs1ZLT0K9-fQ/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
          Open Google Sheet
        </a>
      </div>
    </div>
  );
}
