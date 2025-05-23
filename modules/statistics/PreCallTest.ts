import PreCallTest from '@jitsi/precall-test';


export interface IPreCallResult {

    // Maximum bandwidth reached in kbps  (kilo bits per second).
    fractionalLoss: number;

    // Round trip time in milliseconds.
    jitter: number;

    // Variation in packet arrival times during the transmission of media.
    mediaConnectivity: boolean;

    // Packet loss percentage over all the test traffic.
    rtt: number;
    throughput: number; // Whether the data channel was able to send data or not.
}

// Same interface as a PeerConnection configuration object.
export interface IIceServer {
    credential?: string;
    urls: Array<string> | string;
    username?: string;
}

/**
 * Run a pre-call test to check the network conditions. It uses a TURN server to establish
 * a connection between two PeerConnections using the server as a relay. Afterwards it sends
 * some test traffic through a data channel to measure the network conditions, these are
 * recorded and returned through a Promise.
 *
 * @param {Array<IIceServer>} - The ICE servers to use for the test, these are passes to the PeerConnection constructor.
 * @returns {Promise<IPreCallResult | any>} - A Promise that resolves with the test results or rejects with an error.
 */
export default async function runPreCallTest(iceServers: Array<IIceServer>): Promise<IPreCallResult | string> {
    const test = new PreCallTest();

    return await test.start(iceServers);
}
