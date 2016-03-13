/*
	Create a Meeting object
*/
function Meeting(meetingId, meetingName, startInterval, membersMeeting, startMeeting, endMeeting, membersAccepted){
	this.meetingId = meetingId;
	this.meetingName = meetingName;
	this.startInterval = startInterval;
	this.endInterval = timeIntervalLimit(startInterval);
	this.membersMeeting[] = membersMeeting;
	this.startMeeting = startMeeting;
	this.endMeeting = endMeeting;
	this.membersAccepted[] = membersAccepted;
	
};

/*
	Set your time interval to 7 days.
	Return endInterval.
*/
Meeting.prototype.timeIntervalLimit(startInterval) {
	/*
		do something to return endInterval
	*/
};

/*
	Merge free time for all the members in membersMeeting 
*/
Meeting.prototype.mergeFreeTime(membersMeeting) {
	/*
		merge calendars
	*/
};

/*
	Set your meeting time, start and end. Max is 1 hour
*/
Meeting.prototype.timeMeeting() {
	/*
		set startMeeting and endMeeting
	*/
};


/*
	Add a member to membersAccepted[] array based on member's status.
	'Accept' - add to membersAccepted[]
	'Do it without me' - remove from Meeting.membersMeeting
	'Leave a group' - remove from Group.membersInvited	
*/
Meeting.prototype.acceptMember(member, status) {
	/*
		Do the logic here
	*/	
}

/*
	Remove member from Meeting list
*/
Meeting.prototype.removeMemberFromMeeting(memberEmail){
	for (i = 0; i < this.membersMeeting.length; i++) { 
		if(this.membersMeeting[i].getMemberEmail() === memberEmail){
			this.membersMeeting.splice(i, i+1);
		}
	}
};

/*
	Getters and setters
*/
Meeting.prototype.getMeetingId = function() {
    return this.meetingId;
};
Meeting.prototype.setMeetingId = function(meetingId) {
    this.meetingId = meetingId;
};
Meeting.prototype.getMeetingName = function() {
    return this.meetingName;
};
Meeting.prototype.setMeetingName = function(meetingName) {
    this.meetingName = meetingName;
};
Meeting.prototype.getStartInterval = function() {
    return this.startInterval;
};
Meeting.prototype.setStartInterval = function(startInterval) {
    this.startInterval = startInterval;
};
Meeting.prototype.getMembersMeeting = function() {
    return this.membersMeeting;
};
Meeting.prototype.setMembersMeeting = function(membersMeeting) {
    this.membersMeeting = membersMeeting;
};
Meeting.prototype.getStartMeeting = function() {
    return this.startMeeting;
};
Meeting.prototype.setStartMeeting = function(startMeeting) {
    this.startMeeting = startMeeting;
};
Meeting.prototype.getEndMeeting = function() {
    return this.endMeeting;
};
Meeting.prototype.setEndMeeting = function(endMeeting) {
    this.endMeeting = endMeeting;
};
Meeting.prototype.getMembersAccepted = function() {
    return this.membersAccepted;
};
Meeting.prototype.setMembersAccepted = function(membersAccepted) {
    this.membersAccepted = membersAccepted;
};