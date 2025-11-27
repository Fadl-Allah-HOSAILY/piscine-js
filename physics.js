function getAcceleration(){
    if (test.f !== undefined && test.m !== undefined && test.f !== 0 && test.m !== 0){
        return  test.F / test.m
    } else if (test.Δv !== undefined && test.Δt !== undefined && test.Δv !== 0 && test.Δt !== 0){
        return  test.Δv / test.Δt
    }else if (test.d !== undefined && test.t !== undefined && test.d !== 0 && test.t !== 0){
        return  test.d*2 / test.t**2
    }else {
        return  "impossible"
    }
}