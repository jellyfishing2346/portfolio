import Image from 'next/image';

export default function GitHubStats() {
  return (
    <section className="my-12 text-center">
      <h2 className="text-2xl font-bold mb-4">📊 GitHub Stats</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <Image
          src={`https://github-readme-stats.vercel.app/api?username=jellyfishing2346&show_icons=true&theme=radical&hide_title=true&hide_rank=false`}
          alt="GitHub Stats"
          width={420}
          height={180}
        />
        <Image
          src={`https://github-readme-streak-stats.herokuapp.com/?user=jellyfishing2346&theme=radical`}
          alt="GitHub Streak"
          width={420}
          height={180}
        />
      </div>
      <div className="mt-4">
        <Image
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=jellyfishing2346&layout=compact&theme=radical`}
          alt="Top Languages"
          width={420}
          height={180}
        />
      </div>
    </section>
  );
}
