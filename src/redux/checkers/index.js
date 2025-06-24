const createChecker = (endsWith) => function(action) {
    return action.type.endsWith(endsWith)
}

export const isFulfilledAction = createChecker('/fulfilled')
export const isPendingAction = createChecker('/pending')
export const isRejectedAction = createChecker('/rejected')


