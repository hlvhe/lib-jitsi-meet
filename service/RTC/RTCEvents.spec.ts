import * as exported from "./RTCEvents";

// this test is brittle on purpose because it's designed to ensure that the TypeScript conversion maintains backward compatibility

describe( "/service/RTC/RTCEvents members", () => {
    const {
        BRIDGE_BWE_STATS_RECEIVED,
        DATA_CHANNEL_OPEN,
        DATA_CHANNEL_CLOSED,
        ENDPOINT_CONN_STATUS_CHANGED,
        DOMINANT_SPEAKER_CHANGED,
        FORWARDED_SOURCES_CHANGED,
        PERMISSIONS_CHANGED,
        SENDER_VIDEO_CONSTRAINTS_CHANGED,
        LASTN_VALUE_CHANGED,
        LOCAL_TRACK_MAX_ENABLED_RESOLUTION_CHANGED,
        REMOTE_TRACK_ADDED,
        REMOTE_TRACK_MUTE,
        REMOTE_TRACK_REMOVED,
        REMOTE_TRACK_UNMUTE,
        AUDIO_OUTPUT_DEVICE_CHANGED,
        DEVICE_LIST_CHANGED,
        DEVICE_LIST_WILL_CHANGE,
        DEVICE_LIST_AVAILABLE,
        ENDPOINT_MESSAGE_RECEIVED,
        ENDPOINT_STATS_RECEIVED,
        LOCAL_UFRAG_CHANGED,
        REMOTE_UFRAG_CHANGED,
        VIDEO_SSRCS_REMAPPED,
        AUDIO_SSRCS_REMAPPED,
        RTCEvents,
        default: RTCEventsDefault,
        ...others
    } = exported;

    it( "known members", () => {
        expect( BRIDGE_BWE_STATS_RECEIVED ).toBe( 'rtc.bridge_bwe_stats_received' );
        expect( DATA_CHANNEL_OPEN ).toBe( 'rtc.data_channel_open' );
        expect( DATA_CHANNEL_CLOSED ).toBe( 'rtc.data_channel_closed' );
        expect( ENDPOINT_CONN_STATUS_CHANGED ).toBe( 'rtc.endpoint_conn_status_changed' );
        expect( DOMINANT_SPEAKER_CHANGED ).toBe( 'rtc.dominant_speaker_changed' );
        expect( FORWARDED_SOURCES_CHANGED ).toBe( 'rtc.forwarded_sources_changed' );
        expect( PERMISSIONS_CHANGED ).toBe( 'rtc.permissions_changed' );
        expect( SENDER_VIDEO_CONSTRAINTS_CHANGED ).toBe( 'rtc.sender_video_constraints_changed' );
        expect( LASTN_VALUE_CHANGED ).toBe( 'rtc.lastn_value_changed' );
        expect( LOCAL_TRACK_MAX_ENABLED_RESOLUTION_CHANGED ).toBe( 'rtc.local_track_max_enabled_resolution_changed' );
        expect( REMOTE_TRACK_ADDED ).toBe( 'rtc.remote_track_added' );
        expect( REMOTE_TRACK_MUTE ).toBe( 'rtc.remote_track_mute' );
        expect( REMOTE_TRACK_REMOVED ).toBe( 'rtc.remote_track_removed' );
        expect( REMOTE_TRACK_UNMUTE ).toBe( 'rtc.remote_track_unmute' );
        expect( AUDIO_OUTPUT_DEVICE_CHANGED ).toBe( 'rtc.audio_output_device_changed' );
        expect( DEVICE_LIST_CHANGED ).toBe( 'rtc.device_list_changed' );
        expect( DEVICE_LIST_WILL_CHANGE ).toBe( 'rtc.device_list_will_change' );
        expect( DEVICE_LIST_AVAILABLE ).toBe( 'rtc.device_list_available' );
        expect( ENDPOINT_MESSAGE_RECEIVED ).toBe( 'rtc.endpoint_message_received' );
        expect( ENDPOINT_STATS_RECEIVED ).toBe( 'rtc.endpoint_stats_received' );
        expect( LOCAL_UFRAG_CHANGED ).toBe( 'rtc.local_ufrag_changed' );
        expect( REMOTE_UFRAG_CHANGED ).toBe( 'rtc.remote_ufrag_changed' );
        expect( VIDEO_SSRCS_REMAPPED ).toBe( 'rtc.video_ssrcs_remapped' );
        expect( AUDIO_SSRCS_REMAPPED ).toBe( 'rtc.audio_ssrcs_remapped' );

        if ( RTCEvents ) {
            expect( RTCEvents.BRIDGE_BWE_STATS_RECEIVED ).toBe( 'rtc.bridge_bwe_stats_received' );
            expect( RTCEvents.DATA_CHANNEL_OPEN ).toBe( 'rtc.data_channel_open' );
            expect( RTCEvents.DATA_CHANNEL_CLOSED ).toBe( 'rtc.data_channel_closed' );
            expect( RTCEvents.ENDPOINT_CONN_STATUS_CHANGED ).toBe( 'rtc.endpoint_conn_status_changed' );
            expect( RTCEvents.DOMINANT_SPEAKER_CHANGED ).toBe( 'rtc.dominant_speaker_changed' );
            expect( RTCEvents.PERMISSIONS_CHANGED ).toBe( 'rtc.permissions_changed' );
            expect( RTCEvents.SENDER_VIDEO_CONSTRAINTS_CHANGED ).toBe( 'rtc.sender_video_constraints_changed' );
            expect( RTCEvents.LASTN_VALUE_CHANGED ).toBe( 'rtc.lastn_value_changed' );
            expect( RTCEvents.LOCAL_TRACK_MAX_ENABLED_RESOLUTION_CHANGED ).toBe( 'rtc.local_track_max_enabled_resolution_changed' );
            expect( RTCEvents.REMOTE_TRACK_ADDED ).toBe( 'rtc.remote_track_added' );
            expect( RTCEvents.REMOTE_TRACK_MUTE ).toBe( 'rtc.remote_track_mute' );
            expect( RTCEvents.REMOTE_TRACK_REMOVED ).toBe( 'rtc.remote_track_removed' );
            expect( RTCEvents.REMOTE_TRACK_UNMUTE ).toBe( 'rtc.remote_track_unmute' );
            expect( RTCEvents.AUDIO_OUTPUT_DEVICE_CHANGED ).toBe( 'rtc.audio_output_device_changed' );
            expect( RTCEvents.DEVICE_LIST_CHANGED ).toBe( 'rtc.device_list_changed' );
            expect( RTCEvents.DEVICE_LIST_WILL_CHANGE ).toBe( 'rtc.device_list_will_change' );
            expect( RTCEvents.DEVICE_LIST_AVAILABLE ).toBe( 'rtc.device_list_available' );
            expect( RTCEvents.ENDPOINT_MESSAGE_RECEIVED ).toBe( 'rtc.endpoint_message_received' );
            expect( RTCEvents.ENDPOINT_STATS_RECEIVED ).toBe( 'rtc.endpoint_stats_received' );
            expect( RTCEvents.LOCAL_UFRAG_CHANGED ).toBe( 'rtc.local_ufrag_changed' );
            expect( RTCEvents.REMOTE_UFRAG_CHANGED ).toBe( 'rtc.remote_ufrag_changed' );
            expect( RTCEvents.VIDEO_SSRCS_REMAPPED ).toBe( 'rtc.video_ssrcs_remapped' );
            expect( RTCEvents.AUDIO_SSRCS_REMAPPED ).toBe( 'rtc.audio_ssrcs_remapped' );
        }

        if ( RTCEventsDefault ) {
            expect( RTCEventsDefault.BRIDGE_BWE_STATS_RECEIVED ).toBe( 'rtc.bridge_bwe_stats_received' );
            expect( RTCEventsDefault.DATA_CHANNEL_OPEN ).toBe( 'rtc.data_channel_open' );
            expect( RTCEventsDefault.DATA_CHANNEL_CLOSED ).toBe( 'rtc.data_channel_closed' );
            expect( RTCEventsDefault.ENDPOINT_CONN_STATUS_CHANGED ).toBe( 'rtc.endpoint_conn_status_changed' );
            expect( RTCEventsDefault.DOMINANT_SPEAKER_CHANGED ).toBe( 'rtc.dominant_speaker_changed' );
            expect( RTCEventsDefault.PERMISSIONS_CHANGED ).toBe( 'rtc.permissions_changed' );
            expect( RTCEventsDefault.SENDER_VIDEO_CONSTRAINTS_CHANGED ).toBe( 'rtc.sender_video_constraints_changed' );
            expect( RTCEventsDefault.LASTN_VALUE_CHANGED ).toBe( 'rtc.lastn_value_changed' );
            expect( RTCEventsDefault.LOCAL_TRACK_MAX_ENABLED_RESOLUTION_CHANGED ).toBe( 'rtc.local_track_max_enabled_resolution_changed' );
            expect( RTCEventsDefault.REMOTE_TRACK_ADDED ).toBe( 'rtc.remote_track_added' );
            expect( RTCEventsDefault.REMOTE_TRACK_MUTE ).toBe( 'rtc.remote_track_mute' );
            expect( RTCEventsDefault.REMOTE_TRACK_REMOVED ).toBe( 'rtc.remote_track_removed' );
            expect( RTCEventsDefault.REMOTE_TRACK_UNMUTE ).toBe( 'rtc.remote_track_unmute' );
            expect( RTCEventsDefault.AUDIO_OUTPUT_DEVICE_CHANGED ).toBe( 'rtc.audio_output_device_changed' );
            expect( RTCEventsDefault.DEVICE_LIST_CHANGED ).toBe( 'rtc.device_list_changed' );
            expect( RTCEventsDefault.DEVICE_LIST_WILL_CHANGE ).toBe( 'rtc.device_list_will_change' );
            expect( RTCEventsDefault.DEVICE_LIST_AVAILABLE ).toBe( 'rtc.device_list_available' );
            expect( RTCEventsDefault.ENDPOINT_MESSAGE_RECEIVED ).toBe( 'rtc.endpoint_message_received' );
            expect( RTCEventsDefault.ENDPOINT_STATS_RECEIVED ).toBe( 'rtc.endpoint_stats_received' );
            expect( RTCEventsDefault.LOCAL_UFRAG_CHANGED ).toBe( 'rtc.local_ufrag_changed' );
            expect( RTCEventsDefault.REMOTE_UFRAG_CHANGED ).toBe( 'rtc.remote_ufrag_changed' );
            expect( RTCEventsDefault.VIDEO_SSRCS_REMAPPED ).toBe( 'rtc.video_ssrcs_remapped' );
            expect( RTCEventsDefault.AUDIO_SSRCS_REMAPPED ).toBe( 'rtc.audio_ssrcs_remapped' );
        }
    } );

    it( "unknown members", () => {
        const keys = Object.keys( others );
        expect( keys ).withContext( `Extra members: ${ keys.join( ", " ) }` ).toEqual( [] );
    } );
} );
