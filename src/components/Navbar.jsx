import React, { useState } from 'react'
import "./nav.css"
export default function Navbar() {
	const [hamOpen,setHamOpen]=useState(false)
	document.body.style.overflow=hamOpen?"hidden":"auto"
  return (
    <div className='navfont flex justify-between pt-7 max-md:pt-0 absolute w-[100%] max-md:absolute z-10'>
		<div className='flex'>
			{logo}
	      <div className="navbar-container px-20 py-3 flex max-md:justify-end max-md:flex-col">
			<div className={`absolute h-[100vh] w-[100vw] border left-0 top-0 glassMorph z-10 ${hamOpen?"flex":"hidden"} `}></div>
		<ul className={`flex max-md:flex-col max-md:absolute right-0 top-0 max-md:h-[100vh] z-10 max-md:bg-[#00CCBE] max-md:${hamOpen?"flex":"hidden"} `}>
			<li className="nav-link active-link max-md:p-10 ">
				<a href="#">Home
				</a>
				<div className="underline"></div>
			</li>
			<li className="nav-link max-md:p-10">
				<a href="#">Guides</a>
				<div className="underline"></div>
			</li>
			<li className="nav-link max-md:p-10">
				<a href="#">Take Assessment</a>
				<div className="underline"></div>
			</li>
			<li className="nav-link max-md:p-10">
				<a href="#">Contact</a>
				<div className="underline"></div>
			</li>
		</ul>
	</div>
		</div>
	

		<div>
      <button className="group invisible max-md:visible relative" style={{zIndex:10}} onClick={()=>setHamOpen(!hamOpen)} onBlur={()=>{document.body.style.overflow="auto",setHamOpen(false)}}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${hamOpen && "translate-x-10"}`}></div>
            <div className={`bg-black h-[2px] w-7 rounded transform transition-all duration-300 ${hamOpen && "translate-x-10"} delay-75`}></div>
            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${hamOpen && "translate-x-10"} delay-150`}></div>

            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10  ${hamOpen && "translate-x-0"} group-focus: flex w-0 group-focus:w-12`}>
              <div className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 delay-300  ${hamOpen && "rotate-45 rotate-0"}`}></div>
              <div className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500  delay-300  ${hamOpen && "-rotate-45 -rotate-0"}`}></div>
            </div>
          </div>
        </div>
      </button>
    </div>
    </div>
  )
}

const logo=<svg className='w-[100px] h-[80px] text-bold relative bottom-[13px] left-[10px]' style={{flex:1}} width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1024" height="1024" fill="none"/>
<path d="M487.108 256.803L486.746 253.825L487.108 256.803C524.434 252.26 565.237 258.656 598.385 270.325C618.882 277.542 641.633 289.853 662.103 304.366C682.591 318.892 700.602 335.488 711.752 351.177C741.816 393.481 761.896 426.588 767.522 486.617C781.382 634.511 670.898 755.32 537.444 767.521C388.624 781.124 269.499 671.832 256.107 538.631C247.317 451.181 284.38 364.645 350.328 312.309C391.35 279.755 431.82 263.53 487.108 256.803Z" stroke="black" stroke-width="6"/>
<path d="M553.767 763.572C569.961 762.692 588.351 757.32 605.756 750.275C624.393 742.73 641.654 733.368 653.482 725.91C711.099 689.577 753.231 630.704 765.055 560.74C772.819 514.81 769.155 481.596 757.88 440.108C754.305 441.256 751.573 443.137 749.442 445.581C746.761 448.656 744.889 452.787 743.652 457.882C741.154 468.17 741.422 481.537 742.004 495.951C742.061 497.358 742.121 498.775 742.181 500.198C742.727 513.143 743.295 526.617 741.888 538.485C740.403 551.009 736.647 562.454 727.684 569.701C728.705 581.212 728.611 587.791 725.251 594.033C723.539 597.211 721.058 600.166 717.824 603.604C716.241 605.288 714.357 607.209 712.22 609.388C710.099 611.55 707.729 613.967 705.156 616.658L705.155 616.658C701.323 620.666 697.827 623.871 694.051 627.333C692.825 628.457 691.57 629.609 690.263 630.823C684.91 635.802 678.518 642.009 669.402 652.123L669.402 652.123C667.597 654.125 665.794 656.027 664.012 657.906C658.178 664.058 652.573 669.969 647.899 678.371L647.899 678.372C647.49 679.106 647.143 679.824 646.755 680.626C646.489 681.177 646.203 681.769 645.864 682.433C645.125 683.884 644.192 685.548 642.945 686.882C641.647 688.271 639.856 689.463 637.474 689.584C635.179 689.7 632.872 688.792 630.549 687.183C628.341 685.655 627.162 683.49 626.879 681.052C626.612 678.749 627.152 676.34 628.022 674.06C629.762 669.503 633.222 664.454 636.949 659.795C643.228 651.945 650.884 644.47 654.046 641.383C654.653 640.791 655.094 640.36 655.329 640.119C661.766 633.497 668.022 626.591 674.317 619.642C675.788 618.018 677.261 616.392 678.74 614.767C686.521 606.209 694.42 597.694 702.732 589.823M553.767 763.572L704.795 592.002M553.767 763.572C557.652 737.513 562.972 707.617 571.141 684.565C583.961 648.398 602.861 635.806 620.711 623.913C627.128 619.638 633.409 615.453 639.224 610.296L637.233 608.052M702.732 589.823L704.795 592.002M702.732 589.823C702.732 589.824 702.732 589.824 702.731 589.824L704.795 592.002M702.732 589.823C703.727 588.88 704.819 588.038 705.753 587.317C705.907 587.198 706.057 587.082 706.202 586.97C707.291 586.124 708.127 585.431 708.765 584.697C709.368 584.004 709.736 583.337 709.907 582.571C710.08 581.793 710.1 580.687 709.649 579.052L709.649 579.052C709.187 577.377 707.873 575.812 705.419 574.679C702.941 573.535 699.438 572.917 695.108 573.21C686.469 573.793 675.053 577.976 663.459 587.636L663.459 587.636C658.926 591.412 655.31 594.901 651.597 598.546C651.213 598.924 650.828 599.302 650.44 599.684C647.088 602.981 643.568 606.442 639.224 610.296L637.233 608.052M704.795 592.002C705.671 591.172 706.627 590.433 707.567 589.707C711.025 587.036 714.271 584.529 712.541 578.255C709.539 567.362 685.516 565.353 661.539 585.331C656.428 589.587 652.467 593.483 648.338 597.543C644.983 600.843 641.517 604.252 637.233 608.052M637.233 608.052C631.806 612.866 625.77 616.886 619.497 621.064C601.477 633.067 581.494 646.378 568.314 683.563" stroke="black" stroke-width="6"/>
<path d="M346.36 579.458L346.36 579.458C340.78 576.608 334.508 575.045 328.723 575.096C323.156 575.145 318.252 576.678 314.737 579.737C314.454 580.581 314.515 581.9 315.462 583.982C316.538 586.346 318.494 589.082 321.008 592.021C324.288 595.856 328.099 599.588 331.594 603.011C333.551 604.927 335.409 606.746 337.019 608.432C341.166 612.774 345.877 617.542 350.809 622.536L351.312 623.045C356.419 628.215 361.744 633.611 366.869 638.97C377.07 649.637 386.659 660.34 392.203 668.981C392.319 669.162 392.448 669.359 392.586 669.572C393.92 671.625 396.165 675.081 397.151 678.554C397.707 680.515 397.975 682.837 397.183 685.094C396.35 687.468 394.517 689.284 391.838 690.449C390.516 691.024 389.154 691.395 387.757 691.367C386.303 691.337 385.022 690.879 383.898 690.123C381.891 688.773 380.324 686.38 378.819 684C378.531 683.545 378.233 683.07 377.923 682.573C374.796 677.574 370.38 670.514 361.701 662.038L361.653 661.992L361.607 661.943L319.501 616.978C317.677 615.033 315.379 613.101 312.781 610.918L312.622 610.783C310.015 608.592 307.16 606.182 304.575 603.469C299.356 597.993 294.992 591.024 295.477 581.382C295.477 581.382 295.477 581.382 295.477 581.382L298.473 581.532C298.903 572.952 299.423 571.317 298.832 570.398C298.217 569.441 296.398 569.257 292.022 562.83L346.36 579.458ZM346.36 579.458C356.461 584.616 364.417 592.029 370.799 598.834C382.476 611.287 393.35 618.927 403.273 625.632C404.012 626.131 404.744 626.624 405.47 627.113C414.526 633.213 422.598 638.651 430.047 646.634C445.755 663.466 459.052 692.078 469.586 762.73C357.048 749.245 275.197 660.927 259.234 561.605C251.39 512.794 254.639 485.767 265.352 442.628C272.193 444.904 276.385 450.423 278.959 458.566C281.907 467.892 282.528 480.131 282.477 493.414C282.459 498.06 282.358 502.848 282.257 507.647C282.073 516.342 281.888 525.071 282.197 533.044C282.675 545.357 284.327 556.857 289.542 564.518M346.36 579.458L289.542 564.518M289.542 564.518C291.787 567.816 293.468 569.659 294.757 570.829C295.311 571.332 295.773 571.691 296.094 571.939L289.542 564.518Z" stroke="black" stroke-width="6"/>
<mask id="path-4-inside-1_179_2" fill="white">
<path d="M558.223 584.272C554.683 571.155 551.872 555.434 549.79 537.111C547.083 513.375 545.73 485.369 545.73 453.096L523.867 462.466V493.698C523.867 505.775 519.495 516.081 510.749 524.618C502.004 533.155 491.281 537.424 478.58 537.424C475.457 537.424 471.501 537.736 466.712 538.361C461.923 538.777 459.112 538.985 458.279 538.985C452.032 538.985 446.827 537.215 442.663 533.676C438.498 530.136 436.416 525.659 436.416 520.246C436.416 512.333 441.413 503.276 451.408 493.073C461.61 482.663 475.353 472.46 492.635 462.466C490.136 433.524 484.41 412.702 475.457 400.001H456.717C450.263 409.371 444.537 414.055 439.539 414.055C435.375 413.639 433.293 412.077 433.293 409.371C433.293 408.538 434.022 407.705 435.479 406.872C440.06 403.957 442.975 401.667 444.224 400.001H426.422V393.754H448.909C461.402 381.261 471.813 375.015 480.142 375.015C484.098 375.015 488.158 376.681 492.322 380.012C496.487 383.344 500.235 387.924 503.566 393.754H556.661C564.573 385.426 575.505 381.261 589.455 381.261C590.913 381.053 592.578 381.678 594.452 383.135C596.326 384.593 597.263 386.05 597.263 387.508C596.847 390.631 596.326 392.713 595.702 393.754H609.132V400.001H592.578C580.085 426.236 573.839 465.797 573.839 518.684C573.839 540.755 574.88 557.412 576.962 568.656L558.223 584.272ZM459.841 393.754H473.895C471.813 391.672 470.251 390.631 469.21 390.631C466.087 390.423 462.964 391.464 459.841 393.754ZM480.142 524.931C484.098 524.931 487.429 522.64 490.136 518.059C492.843 513.479 494.196 507.961 494.196 501.506C494.196 498.175 494.092 494.843 493.884 491.512C493.884 487.972 493.467 483.496 492.635 478.082C483.057 483.704 475.457 489.43 469.835 495.26C464.213 501.09 461.402 506.295 461.402 510.876C461.402 514.416 463.276 517.643 467.024 520.558C470.772 523.473 475.144 524.931 480.142 524.931ZM520.744 448.411L548.853 435.918C549.061 433.836 549.478 431.754 550.102 429.672C552.184 421.968 554.371 414.16 556.661 406.247C555.62 404.582 555.1 402.499 555.1 400.001H506.689C512.519 412.702 517.204 428.839 520.744 448.411Z"/>
</mask>
<path d="M558.223 584.272C554.683 571.155 551.872 555.434 549.79 537.111C547.083 513.375 545.73 485.369 545.73 453.096L523.867 462.466V493.698C523.867 505.775 519.495 516.081 510.749 524.618C502.004 533.155 491.281 537.424 478.58 537.424C475.457 537.424 471.501 537.736 466.712 538.361C461.923 538.777 459.112 538.985 458.279 538.985C452.032 538.985 446.827 537.215 442.663 533.676C438.498 530.136 436.416 525.659 436.416 520.246C436.416 512.333 441.413 503.276 451.408 493.073C461.61 482.663 475.353 472.46 492.635 462.466C490.136 433.524 484.41 412.702 475.457 400.001H456.717C450.263 409.371 444.537 414.055 439.539 414.055C435.375 413.639 433.293 412.077 433.293 409.371C433.293 408.538 434.022 407.705 435.479 406.872C440.06 403.957 442.975 401.667 444.224 400.001H426.422V393.754H448.909C461.402 381.261 471.813 375.015 480.142 375.015C484.098 375.015 488.158 376.681 492.322 380.012C496.487 383.344 500.235 387.924 503.566 393.754H556.661C564.573 385.426 575.505 381.261 589.455 381.261C590.913 381.053 592.578 381.678 594.452 383.135C596.326 384.593 597.263 386.05 597.263 387.508C596.847 390.631 596.326 392.713 595.702 393.754H609.132V400.001H592.578C580.085 426.236 573.839 465.797 573.839 518.684C573.839 540.755 574.88 557.412 576.962 568.656L558.223 584.272ZM459.841 393.754H473.895C471.813 391.672 470.251 390.631 469.21 390.631C466.087 390.423 462.964 391.464 459.841 393.754ZM480.142 524.931C484.098 524.931 487.429 522.64 490.136 518.059C492.843 513.479 494.196 507.961 494.196 501.506C494.196 498.175 494.092 494.843 493.884 491.512C493.884 487.972 493.467 483.496 492.635 478.082C483.057 483.704 475.457 489.43 469.835 495.26C464.213 501.09 461.402 506.295 461.402 510.876C461.402 514.416 463.276 517.643 467.024 520.558C470.772 523.473 475.144 524.931 480.142 524.931ZM520.744 448.411L548.853 435.918C549.061 433.836 549.478 431.754 550.102 429.672C552.184 421.968 554.371 414.16 556.661 406.247C555.62 404.582 555.1 402.499 555.1 400.001H506.689C512.519 412.702 517.204 428.839 520.744 448.411Z" fill="black"/>
<path d="M558.223 584.272L555.635 584.97L556.725 589.009L559.938 586.331L558.223 584.272ZM549.79 537.111L552.453 536.809L552.453 536.808L549.79 537.111ZM545.73 453.096H548.41V449.032L544.674 450.633L545.73 453.096ZM523.867 462.466L522.811 460.002L521.187 460.699V462.466H523.867ZM510.749 524.618L512.622 526.536L512.622 526.536L510.749 524.618ZM466.712 538.361L466.944 541.03L467.001 541.025L467.058 541.018L466.712 538.361ZM442.663 533.676L440.927 535.718L440.927 535.718L442.663 533.676ZM451.408 493.073L449.494 491.198L449.493 491.198L451.408 493.073ZM492.635 462.466L493.976 464.786L495.451 463.933L495.305 462.235L492.635 462.466ZM475.457 400.001L477.647 398.457L476.847 397.321H475.457V400.001ZM456.717 400.001V397.321H455.309L454.51 398.48L456.717 400.001ZM439.539 414.055L439.273 416.722L439.406 416.735H439.539V414.055ZM435.479 406.872L436.809 409.199L436.864 409.167L436.918 409.133L435.479 406.872ZM444.224 400.001L446.368 401.609L449.584 397.321H444.224V400.001ZM426.422 400.001H423.742V402.681H426.422V400.001ZM426.422 393.754V391.074H423.742V393.754H426.422ZM448.909 393.754V396.434H450.019L450.804 395.649L448.909 393.754ZM492.322 380.012L493.996 377.919L493.996 377.919L492.322 380.012ZM503.566 393.754L501.239 395.084L502.011 396.434H503.566V393.754ZM556.661 393.754V396.434H557.812L558.604 395.6L556.661 393.754ZM589.455 381.261V383.941H589.646L589.834 383.914L589.455 381.261ZM594.452 383.135L596.098 381.02L596.098 381.02L594.452 383.135ZM597.263 387.508L599.92 387.862L599.943 387.686V387.508H597.263ZM595.702 393.754L593.404 392.376L590.968 396.434H595.702V393.754ZM609.132 393.754H611.812V391.074H609.132V393.754ZM609.132 400.001V402.681H611.812V400.001H609.132ZM592.578 400.001V397.321H590.886L590.159 398.849L592.578 400.001ZM576.962 568.656L578.678 570.715L579.883 569.71L579.597 568.168L576.962 568.656ZM459.841 393.754L458.256 391.593L451.654 396.434H459.841V393.754ZM473.895 393.754V396.434H480.365L475.79 391.859L473.895 393.754ZM469.21 390.631L469.032 393.305L469.121 393.311H469.21V390.631ZM493.884 491.512H491.204V491.596L491.209 491.679L493.884 491.512ZM492.635 478.082L495.283 477.674L494.683 473.772L491.278 475.771L492.635 478.082ZM469.835 495.26L471.764 497.12L469.835 495.26ZM467.024 520.558L468.669 518.443L468.669 518.443L467.024 520.558ZM520.744 448.411L518.107 448.888L518.714 452.246L521.832 450.86L520.744 448.411ZM548.853 435.918L549.941 438.367L551.365 437.735L551.52 436.185L548.853 435.918ZM550.102 429.672L552.669 430.442L552.68 430.406L552.689 430.371L550.102 429.672ZM556.661 406.247L559.235 406.993L559.568 405.842L558.934 404.827L556.661 406.247ZM555.1 400.001H557.78V397.321H555.1V400.001ZM506.689 400.001V397.321H502.51L504.254 401.119L506.689 400.001ZM560.81 583.574C557.315 570.623 554.525 555.042 552.453 536.809L547.127 537.414C549.219 555.827 552.051 571.686 555.635 584.97L560.81 583.574ZM552.453 536.808C549.761 513.2 548.41 485.301 548.41 453.096H543.05C543.05 485.438 544.406 513.549 547.127 537.415L552.453 536.808ZM544.674 450.633L522.811 460.002L524.923 464.929L546.785 455.559L544.674 450.633ZM521.187 462.466V493.698H526.547V462.466H521.187ZM521.187 493.698C521.187 505.043 517.113 514.661 508.877 522.7L512.622 526.536C521.876 517.502 526.547 506.506 526.547 493.698H521.187ZM508.877 522.7C500.654 530.728 490.612 534.744 478.58 534.744V540.104C491.95 540.104 503.354 535.582 512.622 526.536L508.877 522.7ZM478.58 534.744C475.296 534.744 471.214 535.071 466.365 535.703L467.058 541.018C471.787 540.401 475.617 540.104 478.58 540.104V534.744ZM466.48 535.691C461.621 536.113 458.964 536.305 458.279 536.305V541.665C459.26 541.665 462.225 541.441 466.944 541.03L466.48 535.691ZM458.279 536.305C452.572 536.305 448.01 534.703 444.398 531.634L440.927 535.718C445.645 539.728 451.493 541.665 458.279 541.665V536.305ZM444.398 531.634C440.827 528.598 439.096 524.864 439.096 520.246H433.736C433.736 526.454 436.17 531.674 440.927 535.718L444.398 531.634ZM439.096 520.246C439.096 513.42 443.459 505.017 453.322 494.949L449.493 491.198C439.367 501.535 433.736 511.247 433.736 520.246H439.096ZM453.322 494.949C463.305 484.762 476.833 474.7 493.976 464.786L491.293 460.146C473.873 470.22 459.916 480.563 449.494 491.198L453.322 494.949ZM495.305 462.235C492.795 433.167 487.022 411.755 477.647 398.457L473.266 401.545C481.799 413.649 487.477 433.88 489.965 462.696L495.305 462.235ZM475.457 397.321H456.717V402.681H475.457V397.321ZM454.51 398.48C451.358 403.056 448.478 406.346 445.885 408.468C443.278 410.6 441.183 411.375 439.539 411.375V416.735C442.893 416.735 446.159 415.168 449.279 412.616C452.412 410.052 455.622 406.315 458.924 401.521L454.51 398.48ZM439.806 411.389C437.943 411.202 436.943 410.788 436.463 410.428C436.127 410.176 435.973 409.92 435.973 409.371H430.613C430.613 411.528 431.5 413.406 433.247 414.716C434.849 415.918 436.972 416.492 439.273 416.722L439.806 411.389ZM435.973 409.371C435.973 409.791 435.777 409.977 435.856 409.886C435.951 409.778 436.219 409.536 436.809 409.199L434.15 404.545C433.282 405.041 432.457 405.631 431.823 406.356C431.173 407.099 430.613 408.117 430.613 409.371H435.973ZM436.918 409.133C441.468 406.238 444.788 403.716 446.368 401.609L442.08 398.393C441.162 399.617 438.652 401.676 434.04 404.611L436.918 409.133ZM444.224 397.321H426.422V402.681H444.224V397.321ZM429.102 400.001V393.754H423.742V400.001H429.102ZM426.422 396.434H448.909V391.074H426.422V396.434ZM450.804 395.649C456.959 389.494 462.512 384.97 467.466 381.998C472.434 379.017 476.636 377.695 480.142 377.695V372.335C475.318 372.335 470.151 374.136 464.708 377.402C459.251 380.676 453.352 385.521 447.014 391.859L450.804 395.649ZM480.142 377.695C483.307 377.695 486.794 379.022 490.648 382.105L493.996 377.919C489.522 374.34 484.888 372.335 480.142 372.335V377.695ZM490.648 382.105C494.49 385.178 498.033 389.474 501.239 395.084L505.893 392.425C502.436 386.374 498.483 381.509 493.996 377.919L490.648 382.105ZM503.566 396.434H556.661V391.074H503.566V396.434ZM558.604 395.6C565.905 387.916 576.07 383.941 589.455 383.941V378.581C574.939 378.581 563.242 382.936 554.718 391.909L558.604 395.6ZM589.834 383.914C590.236 383.857 591.168 383.976 592.807 385.251L596.098 381.02C593.989 379.38 591.59 378.249 589.076 378.608L589.834 383.914ZM592.807 385.251C594.436 386.518 594.583 387.284 594.583 387.508H599.943C599.943 384.816 598.216 382.668 596.098 381.02L592.807 385.251ZM594.607 387.154C594.406 388.657 594.188 389.852 593.961 390.762C593.723 391.711 593.514 392.192 593.404 392.376L598 395.133C598.514 394.276 598.877 393.195 599.161 392.062C599.454 390.89 599.704 389.482 599.92 387.862L594.607 387.154ZM595.702 396.434H609.132V391.074H595.702V396.434ZM606.452 393.754V400.001H611.812V393.754H606.452ZM609.132 397.321H592.578V402.681H609.132V397.321ZM590.159 398.849C577.406 425.629 571.159 465.674 571.159 518.684H576.519C576.519 465.921 582.765 426.843 594.998 401.153L590.159 398.849ZM571.159 518.684C571.159 540.798 572.199 557.653 574.327 569.144L579.597 568.168C577.561 557.172 576.519 540.712 576.519 518.684H571.159ZM575.247 566.597L556.507 582.213L559.938 586.331L578.678 570.715L575.247 566.597ZM459.841 396.434H473.895V391.074H459.841V396.434ZM475.79 391.859C474.686 390.755 473.635 389.839 472.649 389.182C471.735 388.572 470.536 387.951 469.21 387.951V393.311C468.925 393.311 469.028 393.21 469.676 393.642C470.251 394.026 471.022 394.671 472 395.649L475.79 391.859ZM469.389 387.957C465.497 387.698 461.763 389.021 458.256 391.593L461.425 395.916C464.165 393.907 466.677 393.148 469.032 393.305L469.389 387.957ZM480.142 527.611C485.364 527.611 489.442 524.502 492.443 519.423L487.829 516.696C485.416 520.779 482.831 522.251 480.142 522.251V527.611ZM492.443 519.423C495.441 514.349 496.876 508.338 496.876 501.506H491.516C491.516 507.583 490.244 512.608 487.829 516.696L492.443 519.423ZM496.876 501.506C496.876 498.119 496.77 494.732 496.559 491.345L491.209 491.679C491.414 494.955 491.516 498.231 491.516 501.506H496.876ZM496.564 491.512C496.564 487.783 496.127 483.158 495.283 477.674L489.986 478.489C490.808 483.833 491.204 488.161 491.204 491.512H496.564ZM491.278 475.771C481.562 481.474 473.747 487.342 467.906 493.399L471.764 497.12C477.167 491.517 484.552 485.934 493.991 480.393L491.278 475.771ZM467.906 493.399C462.141 499.378 458.722 505.232 458.722 510.876H464.082C464.082 507.359 466.285 502.802 471.764 497.12L467.906 493.399ZM458.722 510.876C458.722 515.505 461.218 519.437 465.379 522.673L468.669 518.443C465.335 515.849 464.082 513.326 464.082 510.876H458.722ZM465.379 522.673C469.623 525.974 474.582 527.611 480.142 527.611V522.251C475.707 522.251 471.921 520.972 468.669 518.443L465.379 522.673ZM521.832 450.86L549.941 438.367L547.765 433.469L519.655 445.962L521.832 450.86ZM551.52 436.185C551.71 434.28 552.092 432.366 552.669 430.442L547.535 428.902C546.863 431.142 546.412 433.392 546.186 435.651L551.52 436.185ZM552.689 430.371C554.767 422.683 556.949 414.89 559.235 406.993L554.087 405.502C551.792 413.429 549.602 421.253 547.515 428.972L552.689 430.371ZM558.934 404.827C558.222 403.689 557.78 402.132 557.78 400.001H552.42C552.42 402.867 553.018 405.474 554.388 407.668L558.934 404.827ZM555.1 397.321H506.689V402.681H555.1V397.321ZM504.254 401.119C509.96 413.55 514.592 429.452 518.107 448.888L523.381 447.934C519.817 428.226 515.079 411.854 509.125 398.883L504.254 401.119Z" fill="none" mask="url(#path-4-inside-1_179_2)"/>
<rect x="423.742" y="394.783" width="183.023" height="4.55132" fill="black"/>
</svg>
