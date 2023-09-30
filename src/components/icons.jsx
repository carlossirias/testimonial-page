/* eslint-disable react/prop-types */
export function DoneRing({fill='#4CA154', perimeter})
{
    return(
        <svg width={perimeter} height={perimeter} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 10.1666 20.4518 8.46124 19.5103 7.03891L12.355 14.9893C11.6624 15.7589 10.4968 15.8726 9.66844 15.2513L6.4 12.8C5.95817 12.4686 5.86863 11.8418 6.2 11.4C6.53137 10.9582 7.15817 10.8686 7.6 11.2L10.8684 13.6513L18.214 5.48955C16.5986 3.94717 14.4099 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill={fill}/>
        </svg>
    )
}

export function StarIcon({fill , perimeter})
{
    return (
        <svg width={perimeter} height={perimeter} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3073 7.21989C10.9494 5.61921 11.2704 4.81886 11.792 4.70794C11.9291 4.67877 12.0709 4.67877 12.208 4.70794C12.7296 4.81886 13.0506 5.61921 13.6927 7.21989C14.0579 8.13017 14.2404 8.58531 14.582 8.89488C14.6779 8.98171 14.7819 9.05904 14.8926 9.12579C15.2875 9.36377 15.7803 9.40791 16.7661 9.4962C18.4349 9.64565 19.2693 9.72037 19.5241 10.1961C19.5768 10.2946 19.6127 10.4013 19.6302 10.5117C19.7147 11.0447 19.1013 11.6028 17.8745 12.7189L17.5338 13.0289C16.9603 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5428 16.3102 14.7598C16.2581 15.1215 16.342 15.5 16.51 16.257L16.57 16.5274C16.8712 17.885 17.0218 18.5637 16.8338 18.8974C16.6649 19.1971 16.3539 19.3889 16.0103 19.4053C15.6278 19.4236 15.0888 18.9844 14.0108 18.106C13.3006 17.5273 12.9455 17.2379 12.5513 17.1249C12.191 17.0216 11.809 17.0216 11.4488 17.1249C11.0545 17.2379 10.6994 17.5273 9.98923 18.106C8.91125 18.9844 8.37227 19.4236 7.98975 19.4053C7.64615 19.3889 7.3351 19.1971 7.16623 18.8974C6.97824 18.5637 7.12884 17.885 7.43004 16.5274L7.49004 16.257C7.658 15.5 7.74197 15.1215 7.68986 14.7598C7.6586 14.5428 7.59188 14.3325 7.49238 14.1372C7.32651 13.8116 7.03974 13.5507 6.46619 13.0289L6.12552 12.7189C4.89873 11.6028 4.28534 11.0447 4.36981 10.5117C4.3873 10.4013 4.42318 10.2946 4.47595 10.1961C4.73075 9.72037 5.56514 9.64565 7.2339 9.4962C8.21968 9.40791 8.71257 9.36377 9.10741 9.12579C9.21816 9.05904 9.32217 8.98171 9.41799 8.89488C9.7596 8.58531 9.94217 8.13017 10.3073 7.21989Z" fill={fill} />
        </svg>
    )
}