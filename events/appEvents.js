import analytics from '@react-native-firebase/analytics';


export const appEvents = async(eventName="",
payload={})=>{


     try {
        await analytics().logEvent(eventName, payload={});
        console.log(`Event ${eventName} logged successfully`);
     } catch (error) {
        console.error(`Error logging event ${eventName}:`, error);
}
}