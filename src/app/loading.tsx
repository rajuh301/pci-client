const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>

        {/* Text with fade animation */}
        <p className="mt-4 text-lg font-medium text-gray-600 dark:text-gray-300 animate-pulse">
          Loading your content...
        </p>

        {/* Optional progress bar */}
        <div className="w-64 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-6 mx-auto">
          <div className="h-full bg-blue-500 dark:bg-blue-400 rounded-full w-1/3 animate-[progress_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
