export default class System {

    public static apiURL = 'http://localhost:3001';
    // public static apiURL = 'http://3.88.100.250:3001';  // EC2 Instance

    static determineMobile() {
        return (window.innerWidth <= 600);
    }

}