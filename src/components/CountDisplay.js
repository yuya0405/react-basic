import React from 'react'

const CountDisplay = ({name, count}) => {
    console.log(`display ${name}`)
    return (
        <div>
            カウント：{count}
        </div>
    )
}

export default React.memo(CountDisplay)
