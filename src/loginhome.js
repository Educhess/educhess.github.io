import PdfViewerComponent from './components/PdfViewerComponent';

function DocumentViewerComponent() {
	return (
		<div className="PDF-viewer">
			<PdfViewerComponent
				document={"page 2.pdf"}
			/>
		</div>
	);
}

export default DocumentViewerComponent();