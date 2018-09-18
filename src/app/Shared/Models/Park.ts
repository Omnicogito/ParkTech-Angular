enum State{
    AL =1, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY
}
export interface Park{
    
    ParkId: number;
    OwnerId: number;
    ParkName: string;
    ParkCost: number;
    ParkState: State;
    ParkPhone: string;
    ParkWebsite: string;
    ParkDescription: string;

}