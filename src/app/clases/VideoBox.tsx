import YoutubeEmbed from "./EmbedYoutube";

export interface BlogBoxProps {
  video: {
    id: number;
    title: string;
    urlCode: string;
  };
}

function VideoBox({ video }: BlogBoxProps) {
  const { title } = video;
  return (
    <div className="bg-slate-100 pt-3">
      <h2 className="text-3xl font-bold text-center ">{title}</h2>
      <YoutubeEmbed embedId={video.urlCode} />
    </div>
  );
}

export default VideoBox;
