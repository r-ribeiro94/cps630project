function Groups(){
}

/*
	Create a Group object
*/
function Group(groupId, groupName, membersInvited){
	this.groupId = groupId;
	this.groupName = groupName;
	this.membersInvited[] = membersInvited;	
};

/*
	Add a member object to membersInvited[] array
*/
Group.prototype.inviteMember(member){
	this.membersInvited.push(member);
};


/*
	Get invited member object from array of invited members by Email 
*/
Group.prototype.getMemberByEmail(memberEmail){
	for (i = 0; i < this.membersInvited.length; i++) { 
		if(this.membersInvited[i].getMemberEmail() === memberEmail){
			return this.membersInvited[i];
		}
	}
	return;
};

/*
	Remove member from Group list
*/
Meeting.prototype.removeMemberFromGroup(memberEmail){
	for (i = 0; i < this.membersAccepted.length; i++) { 
		if(this.membersAccepted[i].getMemberEmail() === memberEmail){
			this.membersAccepted.splice(i, i+1);
		}
	}
};

/*
	Getters and setters
*/
Group.prototype.getGroupId = function() {
    return this.groupId;
};
Group.prototype.setGroupId = function(groupId) {
    this.groupId = groupId;
};
Group.prototype.getGroupName = function() {
    return this.groupName;
};
Group.prototype.setGroupName = function(groupName) {
    this.groupName = groupName;
};
Group.prototype.getMembersInvited = function() {
    return this.membersInvited;
};
Group.prototype.setMembersInvited = function(memebers) {
    this.members = memebers;
};
