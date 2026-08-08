const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="neo w-16 h-16 rounded-full flex items-center justify-center animate-spin">
        <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export default Spinner