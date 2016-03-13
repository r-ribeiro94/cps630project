
/*
	Create a Member object
*/
function Member(memeberId, memberEMail, memberName, memberFreetTime){
	this.memeberId = memeberId;
	this.memberEMail = memberEMail;
	this.memberName = memberName;
	this.memberFreetTime = memberFreetTime;
};

/*
	After receiving member's free time from google calendar
	set memeberFreeTime.
*/
Member.prototype.setMemberFreeTime(memberEmail) {
	/*
		Do the logic here
	*/	
}

/*
	Getters and setters
*/
Member.prototype.getMemeberId = function() {
    return this.memeberId;
};
Member.prototype.setMemeberId = function(memeberId) {
    this.memeberId = memeberId;
};
Member.prototype.getMemberEMail = function() {
    return this.memberEMail;
};
Member.prototype.setMemberEMail = function(memberEMail) {
    this.memberEMail = memberEMail;
};
Member.prototype.getMemberName = function() {
    return this.memberName;
};
Member.prototype.setMemberName = function(memberName) {
    this.memberName = memberName;
};
Member.prototype.getMemberFreetTime = function() {
    return this.memberFreetTime;
};
/*Member.prototype.setMemberFreetTime = function(MemberFreetTime) {
    this.memberFreetTime = MemberFreetTime;
};*/