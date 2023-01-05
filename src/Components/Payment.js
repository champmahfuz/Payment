import React from 'react';

const Payments = () => {
    return (
        <>

            <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" >Card</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div style={{ width: '40rem', height: '100%' }} class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class='row'>
                                <h5 class="modal-title mb-2" id="exampleModalLabel">Your Deal DOMFLY0223 Will Change!</h5>

                                <p style={{ marginBottom: '-5px' }}>Your previously selected deal DOMFLY0223 is not available for bkash </p>
                            </div>
                            <button type="button" class="btn-close mr-5 mb-5" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="card" style={{ width: '20rem' }}>
                                <div class="card-body">
                                    <h6 class="card-title">FLYDOMFLY0223</h6>
                                    <p class="card-text text-start">8% discount on bkash nogad rocket tap and upay payment</p>
                                    <p class='card-link text-start text-primary '>Terms and Condition</p>
                                </div>
                            </div>
                            <div style={{ justifyContent: 'space-between' }} className='d-flex mt-5'>

                                <input type="text" class="form-control" placeholder="Have a coupon?" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                <button class="btn btn-outline-secondary mr-2" type="button" id="button-addon1">Apply</button>
                            </div>
                        </div>
                        <div style={{ justifyContent: 'space-between' }} class="d-flex p-2 modal-footer ">
                            <p className='mt-4'>Go back to payment page</p>

                            <div className='d-grid'>
                                <p>You pay BDT 4090</p>
                                <button type="button" class="btn btn-primary">Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payments;