export default function SheetEmbed() {
  return (
    <div className="w-full h-[70vh] rounded-lg overflow-hidden border">
      <iframe
        src="https://docs.google.com/spreadsheets/d/1pnszYgqVdK0REQG7f2ASzicFJRci1Mnzs1ZLT0K9-fQ/pubhtml?widget=true&headers=false"
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
