const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {
  const handleClick = () => {
    if(bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  };
  return (
    <div className={`bg-violet-200 border-2 rounded-xl ${bigShoeImg ===imgURL.bigShoe ? 'border-red-500':'border-transparent'} cusror-pointer max-sm:flex-1`}
    onClick={handleClick}>
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rouded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail} alt='shoe collection' width={127} height={103} className='object=contain'/>
      </div>
    </div>

  )


}

export default ShoeCard