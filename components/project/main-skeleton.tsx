import Card from "@/components/ui/card";

const ProjectItemSkeleton = () => {
  return (
    <Card className="mb-8">
      <div className="animate-pulse">
        <div className="mx-auto mt-4 px-8 py-4 text-center">
          {/* Title skeleton */}
          <div className="mx-auto h-8 w-3/4 rounded-lg bg-gray-200 dark:bg-gray-700" />
          
          {/* Category skeleton */}
          <div className="mx-auto mt-4 h-6 w-1/3 rounded-full bg-gray-200 dark:bg-gray-700" />
          
          {/* Description skeleton */}
          <div className="mx-auto mt-4 space-y-2">
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
          
          {/* Buttons skeleton */}
          <div className="mx-auto mt-4 flex w-fit max-w-xs gap-2">
            <div className="h-10 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="h-10 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
        
        {/* Image skeleton */}
        <div className="mt-6 px-8">
          <div className="aspect-video w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </Card>
  );
};

export default ProjectItemSkeleton; 