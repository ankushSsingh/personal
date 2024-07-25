import content from "@/public/content";

export default async function ThoughtSkeleton() {
  return (
    <div className="flex flex-row justify-center">
      <div>
            <div className="p-2 font-bold">
              {content.Loading}
            </div>
      </div>
    </div>
  );
};
