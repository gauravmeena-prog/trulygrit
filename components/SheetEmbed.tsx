export default function SheetEmbed() {
  return (
    <div className="w-full h-[70vh] rounded-lg overflow-hidden border">
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTuf6r530fC0LrRDg6eXNCuusNlwwgreHvKxBnqKYE0xdBIylRMaUpnA2-P_rUEvZoXYwssK-Io3Q1q/pubhtml?widget=true&headers=false&chrome=false"
        className="w-full h-full"
        loading="lazy"
        title="Contact Form Submissions"
      />
    </div>
  );
}
