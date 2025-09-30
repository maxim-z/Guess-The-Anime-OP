import type { SpinningRecordProps } from "@types";

// defaults for the record player
// const angles = [0, 60, 120, 160, 200, 240, 280, 320];

function SpinningRecord({angles}: SpinningRecordProps) {
    return (
        <div className='TopLeftSpinningRecordContainer relative w-[100px] h-[100px]'>
            <div className='Record relative w-full h-full rounded-full'>
                <div 
                    className={`RecordGradient absolute inset-0 rounded-full
                    bg-linear-to-r/srgb from-teal-950 to-indigo-500
                    animate-[spin_3s_linear_infinite]
                    delay-[${Math.random() * 1500}]`}
                />
                <div className="RecordRings absolute inset-0 rounded-full 
                                [background:repeating-radial-gradient(circle,#0f172a_0px,#0f172a_8px,transparent_9px,transparent_14px)]"/>
            </div>
            {angles.map((angle) => (
                <div
                    key={angle} 
                    className={`RecordStickOverlay absolute w-[55px] h-[15px] top-[50%] left-[50%] -translate-y-1/2 bg-black origin-left rounded-r-xl z-2`}
                    style={{ transform: `rotate(${angle}deg)` }}
                />
            ))}
            <div className='RecordBoundingCircle absolute top-[-5px] left-[-5px] w-[110%] h-[110%] border-[8px] border-black rounded-full z-3' />
            {/* <motion.div
                key='angle_highlight'
                className={`RecordStickOverlay absolute w-[33px] h-[4px] top-[58%] left-[65%] -translate-y-1/2 bg-zinc-50/60 origin-left rotate-30 z-1`}
                animate={{ rotate: 30 }}
                transition={{ repeat: Infinity, duration: 3, ease: easeOut}}
            /> */}
        </div>
    )
}

export default SpinningRecord;