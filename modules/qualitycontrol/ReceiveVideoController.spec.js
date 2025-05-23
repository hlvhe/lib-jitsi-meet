import FeatureFlags from '../flags/FeatureFlags';
import Listenable from '../util/Listenable';

import ReceiveVideoController from './ReceiveVideoController';

// JSDocs disabled for Mock classes to avoid duplication - check on the original classes for info.
/* eslint-disable require-jsdoc */
/**
 * Mock conference for the purpose of this test file.
 */
class MockConference extends Listenable {
    /**
     * A constructor...
     */
    constructor() {
        super();
        this.options = {
            config: {}
        };

        this.activeMediaSession = undefined;
        this.mediaSessions = [];
    }

    getMediaSessions() {
        return this.mediaSessions;
    }
}

/**
 * Mock {@link RTC} - add things as needed, but only things useful for all tests.
 */
export class MockRTC extends Listenable {
    /**
     * constructor
     */
    /* eslint-disable no-useless-constructor */
    constructor() {
        super();
    }

    // eslint-disable-next-line no-empty-function
    setReceiverVideoConstraints() {
    }
}

/* eslint-enable require-jsdoc */
describe('ReceiveVideoController', () => {
    let conference;
    let rtc;
    let receiveVideoController;

    beforeEach(() => {
        conference = new MockConference();
        rtc = new MockRTC();
        conference.rtc = rtc;
        receiveVideoController = new ReceiveVideoController(conference);
    });

    describe('when sourceNameSignaling is enabled', () => {
        beforeEach(() => {
            FeatureFlags.init({ });
        });

        it('should call setReceiverVideoConstraints with the source names format.', () => {
            const rtcSpy = spyOn(rtc, 'setReceiverVideoConstraints');
            const constraints = {
                onStageSources: [ 'A_camera_1', 'B_screen_2', 'C_camera_1' ],
                selectedSources: [ 'A_camera_1' ]
            };

            receiveVideoController.setReceiverConstraints(constraints);
            expect(rtcSpy).toHaveBeenCalledWith(constraints);
        });
    });
});
